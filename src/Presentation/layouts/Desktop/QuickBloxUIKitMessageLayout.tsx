import React, { useEffect, useRef, useState } from 'react';
import '../../Views/Dialog/Dialog.scss';
import '../../Views/Dialog/DialogHeader/DialogInfoIcon/DialogInfoIcon.scss';
import { Tone } from 'qb-ai-rephrase/src/Tone';
import { toast } from 'react-toastify';
import useQbInitializedDataContext from '../../providers/QuickBloxUIKitProvider/useQbInitializedDataContext';
import { DialogEntity } from '../../../Domain/entity/DialogEntity';
import { DialogListViewModel } from '../../Views/DialogList/DialogListViewModel';
import DialogInfo from '../../Views/DialogInfo/DialogInfo';
import DesktopLayout from './DesktopLayout';
import Dialog from '../../Views/Dialog/Dialog';
import useDialogListViewModel from '../../Views/DialogList/useDialogListViewModel';
import { Pagination } from '../../../Domain/repository/Pagination';
import UiKitTheme from '../../themes/UiKitTheme';
import {
  ReplyMessagesParams,
} from '../../../CommonTypes/BaseViewModel';
import { AIMessageWidget } from '../../Views/Dialog/AIWidgets/AIMessageWidget';
import UseDefaultAIAssistAnswerWidget from '../../Views/Dialog/AIWidgets/UseDefaultAIAssistAnswerWidget';
import UseDefaultAITranslateWidget from '../../Views/Dialog/AIWidgets/UseDefaultAITranslateWidget';
import UseDefaultAIRephraseMessageWidget from '../../Views/Dialog/AIWidgets/UseDefaultAIRephraseMessageWidget';
import { DefaultConfigurations } from '../../../Data/DefaultConfigurations';
import UseDefaultAIAssistAnswerWidgetWithProxy from '../../Views/Dialog/AIWidgets/UseDefaultAIAssistAnswerWidgetWithProxy';
import UseDefaultAITranslateWidgetWithProxy from '../../Views/Dialog/AIWidgets/UseDefaultAITranslateWidgetWithProxy';
import UseDefaultAIRephraseMessageWidgetWithProxy from '../../Views/Dialog/AIWidgets/UseDefaultAIRephraseMessageWidgetWithProxy';
import { DialogType } from '../../../Domain/entity/DialogTypes';
import { GroupDialogEntity } from '../../../Domain/entity/GroupDialogEntity';
import { PrivateDialogEntity } from '../../../Domain/entity/PrivateDialogEntity';
import { PublicDialogEntity } from '../../../Domain/entity/PublicDialogEntity';
import { DialogViewModel } from '../../Views/Dialog/DialogViewModel';
import useDialogViewModel from '../../Views/Dialog/useDialogViewModel';
import { MessageEntity } from '../../../Domain/entity/MessageEntity';
import { stringifyError } from '../../../utils/parse';
import ReplyMessagePreview from '../../ui-components/MessageInput/ReplyMessagePreview/ReplyMessagePreview';
import SectionList from '../../components/containers/SectionList';
import { SectionItem } from '../../components/containers/SectionList/useComponent';
import { useMobileLayout } from '../../components/containers/SectionList/hooks';
import { MessageDTOMapper } from '../../../Data/source/remote/Mapper/MessageDTOMapper';
import MembersList from '../../Views/DialogInfo/MembersList/MembersList';
import useUsersListViewModel from '../../Views/DialogInfo/UsersList/useUsersListViewModel';
import Header from '../../ui-components/Header/Header';
import Avatar from '../../ui-components/Avatar/Avatar';
import {
  GroupChatSvg,
  InformationSvg,
  PublicChannelSvg,
  UserSvg,
} from '../../icons';
import MessageInput from '../../ui-components/MessageInput/MessageInput';
import AIRephraseWidget from '../../Views/Dialog/AIWidgets/AIRephraseWidget/AIRephraseWidget';
import MessageItem from '../../Views/Dialog/MessageItem/MessageItem';
import { MessageSeparator, Placeholder } from '../../ui-components';
import ToastProvider from '../../ui-components/Toast/ToastProvider';
import useModal from '../../../hooks/useModal';
import useQBConnection from '../../providers/QuickBloxUIKitProvider/useQBConnection';
import { ProxyConfig } from '../../../CommonTypes/CommonTypes';
import EventMessageType from '../../../Domain/entity/EventMessageType';
import { formatFileSize } from '../../../utils/formatFileSize';
import UseDefaultAIAssistAnswerWidgetWithSDK from '../../Views/Dialog/AIWidgets/UseDefaultAIAssistAnswerWidgetWithSDK';
import UseDefaultAITranslateWidgetWithSDK from '../../Views/Dialog/AIWidgets/UseDefaultAITranslateWidgetWithSDK';

type AIWidgetPlaceHolder = {
  enabled: boolean;
  default: boolean;
  AIWidget?: AIMessageWidget;
};

type QuickBloxUIKitMessageLayoutProps = {
  theme?: UiKitTheme;
  AIRephrase?: AIWidgetPlaceHolder;
  AITranslate?: AIWidgetPlaceHolder;
  AIAssist?: AIWidgetPlaceHolder;
  uikitHeightOffset?: string;
};

const QuickBloxUIKitMessageLayout: React.FC<
  QuickBloxUIKitMessageLayoutProps
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,react/function-component-definition
> = ({
  theme = undefined,
  AITranslate = undefined,
  AIRephrase = undefined,
  AIAssist = undefined,
  uikitHeightOffset = '0px',
}: QuickBloxUIKitMessageLayoutProps) => {
  const mimeType = 'audio/webm;codecs=opus'; // audio/ogg audio/mpeg audio/webm audio/x-wav audio/mp4
  const messagePerPage = 47;

  const currentContext = useQbInitializedDataContext();
  const QBConfig =
    currentContext.InitParams.qbConfig ||
    DefaultConfigurations.getDefaultQBConfig();
  const userName =
    currentContext.storage.REMOTE_DATA_SOURCE.authInformation?.userName;
  const currentUserId =
    currentContext.storage.REMOTE_DATA_SOURCE.authInformation?.userId;
  const sessionToken =
    currentContext.storage.REMOTE_DATA_SOURCE.authInformation?.sessionToken;
  const { enableForwarding } = QBConfig.appConfig;
  const { enableReplying } = QBConfig.appConfig;
  const { maxFileSize } = currentContext.InitParams;

  const maxTokensForAIRephrase =
    currentContext.InitParams.qbConfig.configAIApi.AIRephraseWidgetConfig
      .maxTokens;

  const rephraseTones: Tone[] =
    currentContext.InitParams.qbConfig.configAIApi.AIRephraseWidgetConfig.Tones;

  let defaultAIRephraseWidget = AIRephrase?.AIWidget;
  let defaultAITranslateWidget = AITranslate?.AIWidget;
  let defaultAIAssistWidget = AIAssist?.AIWidget;

  const getAIAssistAnswer = (): void => {
    if (QBConfig.configAIApi.AIAnswerAssistWidgetConfig.smartChatAssistantId) {
      defaultAIAssistWidget = UseDefaultAIAssistAnswerWidgetWithSDK(
        currentContext.storage.REMOTE_DATA_SOURCE,
        QBConfig.configAIApi.AIAnswerAssistWidgetConfig.smartChatAssistantId,
      );
    } else if (AIAssist?.enabled && !AIAssist?.default) {
      defaultAIAssistWidget = AIAssist.AIWidget;
    } else if (
      AIAssist?.enabled ||
      QBConfig.configAIApi.AIAnswerAssistWidgetConfig.useDefault
    ) {
      if (
        !QBConfig.configAIApi.AIAnswerAssistWidgetConfig.useDefault ||
        (AIAssist && !AIAssist?.default)
      ) {
        defaultAIAssistWidget = undefined;
      } else {
        const { apiKey } = QBConfig.configAIApi.AIAnswerAssistWidgetConfig;
        let token = '';
        const proxyConfig: ProxyConfig =
          QBConfig.configAIApi.AIAnswerAssistWidgetConfig.proxyConfig ||
          DefaultConfigurations.getDefaultProxyConfig();

        if (apiKey) {
          token = apiKey;
          defaultAIAssistWidget = UseDefaultAIAssistAnswerWidget({
            ...proxyConfig,
            apiKeyOrSessionToken: token,
          });
        } else {
          token = sessionToken || '';
          defaultAIAssistWidget = UseDefaultAIAssistAnswerWidgetWithProxy({
            ...proxyConfig,
            apiKeyOrSessionToken: token,
          });
        }
      }
    }
  };
  const getAITranslate = (): void => {
    if (QBConfig.configAIApi.AITranslateWidgetConfig.smartChatAssistantId) {
      defaultAITranslateWidget = UseDefaultAITranslateWidgetWithSDK(
        currentContext.storage.REMOTE_DATA_SOURCE,
        QBConfig.configAIApi.AITranslateWidgetConfig.smartChatAssistantId,
      );
    } else if (AITranslate?.enabled && !AITranslate?.default) {
      defaultAITranslateWidget = AITranslate.AIWidget;
    } else if (
      AITranslate?.enabled ||
      QBConfig.configAIApi.AITranslateWidgetConfig.useDefault
    ) {
      if (
        !QBConfig.configAIApi.AITranslateWidgetConfig.useDefault ||
        (AITranslate && !AITranslate?.default)
      ) {
        defaultAITranslateWidget = undefined;
      } else {
        const { apiKey } = QBConfig.configAIApi.AITranslateWidgetConfig;
        let token = '';
        const proxyConfig: ProxyConfig =
          QBConfig.configAIApi.AITranslateWidgetConfig.proxyConfig ||
          DefaultConfigurations.getDefaultProxyConfig();

        if (apiKey) {
          token = apiKey;
          defaultAITranslateWidget = UseDefaultAITranslateWidget({
            ...proxyConfig,
            apiKeyOrSessionToken: token,
          });
        } else {
          token = sessionToken || '';
          defaultAITranslateWidget = UseDefaultAITranslateWidgetWithProxy({
            ...proxyConfig,
            apiKeyOrSessionToken: token,
          });
        }
      }
    }
  };
  const getAIRephrase = (): void => {
    if (AIRephrase?.enabled && !AIRephrase?.default) {
      defaultAIRephraseWidget = AIRephrase.AIWidget;
    } else if (
      AIRephrase?.enabled ||
      QBConfig.configAIApi.AIRephraseWidgetConfig.useDefault
    ) {
      if (
        !QBConfig.configAIApi.AIRephraseWidgetConfig.useDefault ||
        (AIRephrase && !AIRephrase?.default)
      ) {
        defaultAIRephraseWidget = undefined;
      } else {
        const { apiKey } = QBConfig.configAIApi.AIRephraseWidgetConfig;
        let token = '';
        const proxyConfig: ProxyConfig =
          QBConfig.configAIApi.AIRephraseWidgetConfig.proxyConfig ||
          DefaultConfigurations.getDefaultProxyConfig();

        if (apiKey) {
          token = apiKey;
          defaultAIRephraseWidget = UseDefaultAIRephraseMessageWidget({
            ...proxyConfig,
            apiKeyOrSessionToken: token,
          });
        } else {
          token = sessionToken || '';
          defaultAIRephraseWidget = UseDefaultAIRephraseMessageWidgetWithProxy({
            ...proxyConfig,
            apiKeyOrSessionToken: token,
          });
        }
      }
    }
  };

  getAITranslate();
  getAIRephrase();
  getAIAssistAnswer();
  const dialogsViewModel: DialogListViewModel =
    useDialogListViewModel(currentContext);

  const messagesViewModel: DialogViewModel = useDialogViewModel(
    dialogsViewModel.entity?.type,
    dialogsViewModel.entity,
  );

  const [selectedDialog, setSelectedDialog] = React.useState<DialogEntity>();
  const userViewModel = useUsersListViewModel(selectedDialog);
  const [dialogAvatarUrl, setDialogAvatarUrl] = React.useState('');

  const { browserOnline, connectionStatus, connectionRepository } =
    useQBConnection();

  const [isOnline, setIsOnline] = useState<boolean>(
    browserOnline && connectionStatus,
  );

  connectionRepository.subscribe(
    (status) => {
      console.log(
        `Connection status: ${status ? 'CONNECTED' : 'DISCONNECTED'}`,
      );
      if (status) setIsOnline(true);
      else setIsOnline(false);
    },
    EventMessageType.LocalMessage,
    'DESKTOP_LAYOUT',
  );

  const [needRefresh, setNeedRefresh] = useState(false);
  const toastConnectionErrorId = React.useRef(null);

  //
  const [waitAIWidget, setWaitAIWidget] = useState<boolean>(false);
  const [messageText, setMessageText] = useState<string>('');

  const [showReplyMessage, setShowReplyMessage] = useState(false);
  const [messagesToReply, setMessagesToReply] = useState<MessageEntity[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMobile, width, height, breakpoint] = useMobileLayout();
  const [clientHeight, setClientHeight] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollUpToDown, setScrollUpToDown] = React.useState(false);
  const [needDialogInformation, setNeedDialogInformation] = useState(false);
  const informationCloseHandler = (): void => {
    setNeedDialogInformation(false);
  };
  const informationOpenHandler = (): void => {
    setNeedDialogInformation(true);
  };
  //
  const maxWidthToResizing =
    selectedDialog && needDialogInformation
      ? '$message-view-container-wrapper-min-width'
      : '1040px';
  const workHeight = isMobile
    ? `calc(${height.toString()}px - ${uikitHeightOffset} - 28px)`
    : `calc(100vh - ${uikitHeightOffset} - 28px)`;
  const messagesContainerMobileHeight = showReplyMessage
    ? `calc(${clientHeight}px - 128px - 64px - 16px)`
    : `calc(${clientHeight}px - 128px - 16px)`;
  const messagesContainerHeight = showReplyMessage
    ? `calc(${clientHeight}px - 128px - 64px)`
    : `calc(${clientHeight}px - 128px - 1px)`;
  const clientContainerHeight = `${clientHeight - 5}px`;
  const headerHeight = 64;
  const dialogListScrollableHeight = clientHeight - headerHeight - 6;

  const [warningErrorText, setWarningErrorText] = useState<string>('');
  const [useAudioWidget, setUseAudioWidget] = useState<boolean>(false);
  const [fileToSend, setFileToSend] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream>();
  const mediaRecorder = useRef<MediaRecorder>();
  const [resultAudioBlob, setResultAudioBlob] = useState<Blob>();
  const [audioChunks, setAudioChunks] = useState<Array<Blob>>([]);
  // const [showDialogList, setShowDialogList] = useState<boolean>(true);
  const [showDialogMessages, setShowDialogMessages] = useState<boolean>(true);
  const [showDialogInformation, setShowDialogInformation] =
    useState<boolean>(false);
  const [isAllMembersShow, setIsAllMembersShow] = React.useState(false);

  // functions

  const isAuthProcessed = (): boolean => {
    console.log('call isAuthProcessed');
    const authState = {
      needInit: currentContext.storage.REMOTE_DATA_SOURCE.needInit,
      authProcessed: currentContext.storage.REMOTE_DATA_SOURCE.authProcessed,
      connectionInit: currentContext.storage.CONNECTION_REPOSITORY.needInit
    };
    
    console.log(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `initialValue.REMOTE_DATA_SOURCE_MOCK.needInit: ${currentContext.storage.REMOTE_DATA_SOURCE.needInit}`,
    );
    console.log(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `initialValue.REMOTE_DATA_SOURCE_MOCK.authProcessed: ${currentContext.storage.REMOTE_DATA_SOURCE.authProcessed}`,
    );
    console.log(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `initialValue.CONNECTION_REPOSITORY.needInit: ${currentContext.storage.CONNECTION_REPOSITORY.needInit}`,
    );

    return !authState.needInit && authState.authProcessed && !authState.connectionInit;
  };

  const fetchMoreData = () => {
    if (messagesViewModel.pagination.hasNextPage()) {
      const newPagination = messagesViewModel.pagination;

      newPagination.perPage = messagePerPage;
      newPagination.nextPage();

      messagesViewModel.getMessages(newPagination);
    }
  };

  const getUserAvatarByUid = async () => {
    let result = '';
    const participants: Array<number> =
      dialogsViewModel?.entity &&
      dialogsViewModel?.entity.type === DialogType.private
        ? [
            (dialogsViewModel?.entity as unknown as PrivateDialogEntity)
              .participantId,
          ]
        : [];

    if (participants.length > 0) {
      const senderUser = await userViewModel.getUserById(participants[0]);

      result = senderUser?.photo || '';
    } else {
      result = '';
    }

    return result;
  };

  const getDialogPhotoFileForPreview = async () => {
    try {
      const tmpFileUrl: string = await getUserAvatarByUid();
      if (tmpFileUrl && tmpFileUrl.length > 0) {
        setDialogAvatarUrl(tmpFileUrl);
      } else {
        setDialogAvatarUrl('');
      }
    } catch (error) {
      console.error('Failed to load dialog photo:', error);
      setDialogAvatarUrl('');
    }
  };

  // eslint-disable-next-line consistent-return
  const renderIconForTypeDialog = (dialogEntity: DialogEntity) => {
    if (dialogEntity.type === DialogType.group) {
      const groupDialogEntity = dialogEntity as GroupDialogEntity;

      return (
        <Avatar
          src={groupDialogEntity.photo || ''}
          icon={<GroupChatSvg />}
          size="md"
        />
      );
    }
    if (dialogEntity.type === DialogType.private) {
      return <Avatar src={dialogAvatarUrl || ""} icon={<UserSvg />} size="md" />;
    }
    if (dialogEntity.type === DialogType.public) {
      const publicDialogEntity = dialogEntity as PublicDialogEntity;

      return (
        <Avatar
          src={publicDialogEntity.photo || ""}
          icon={<PublicChannelSvg />}
          size="md"
        />
      );
    }
  };

  const showErrorMessage = (errorMessage: string) => {
    setWarningErrorText(errorMessage);
    setTimeout(() => {
      setWarningErrorText('');
    }, 3000);
  };

  const closeReplyMessageFlowHandler = () => {
    setMessagesToReply([]);
    setShowReplyMessage(false);
  };

  const repliedActions = (replyData: ReplyMessagesParams): void => {
    // eslint-disable-next-line promise/catch-or-return
    messagesViewModel
      .sendReplyMessages(replyData)
      .then((opResult: boolean) => {
        // eslint-disable-next-line promise/always-return
        if (opResult) {
          toast('Message have been replied');
        } else {
          toast('Message have not been replied');
        }
      })
      .catch((reason) => {
        const errorMessage = stringifyError(reason);

        toast(errorMessage);
      })
      .finally(() => {
        setMessageText('');
        closeReplyMessageFlowHandler();
      });
  };

  const getMicrophonePermission = async () => {
    if (window) {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });

        setPermission(true);
        setStream(mediaStream);
      } catch (err) {
        showErrorMessage(
          `The MediaRecorder API throws exception ${stringifyError(err)} .`,
        );
      }
    } else {
      showErrorMessage(
        'The MediaRecorder API is not supported in your browser.',
      );
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/require-await
  const startRecording = async () => {
    if (!stream) return;
    const mimeTypes = [
      'audio/aac',
      'audio/mp4',
      'audio/mpeg',
      'audio/ogg',
      'audio/wav',
      'audio/webm',
      'audio/3gpp',
      'audio/flac',
      'audio/x-aiff',
      'audio/x-m4a',
    ];

    console.log('MIME TYPES: ');
    mimeTypes.forEach((mType) => {
      if (MediaRecorder.isTypeSupported(mimeType)) {
        console.log(`${mType} is supported`);
      } else {
        console.log(`${mType} is not supported`);
      }
    });
    // audio/mp4;codecs=mp4a audio/webm;codecs=opus audio/webm;codecs=vp9,opus
    const mimeContent = window.MediaRecorder.isTypeSupported('audio/mp4')
      ? 'audio/mp4;codecs=mp4a'
      : 'audio/webm;codecs=opus';

    const media = new MediaRecorder(stream, { mimeType: mimeContent });

    mediaRecorder.current = media;
    mediaRecorder.current.start();

    const localAudioChunks: any[] = [];

    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === 'undefined') return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };

    setAudioChunks(localAudioChunks);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const stopRecording = () => {
    if (!mediaRecorder.current) return;
    mediaRecorder.current.stop();

    mediaRecorder.current.onstop = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const audioBlob = new Blob(audioChunks, { type: mimeContent }); // mimeType
      // const mp4Blob = new Blob(recordedChunks, { type: 'video/mp4' });

      // const audioBlob = new Blob(audioChunks, { type: 'video/mp4' }); // mimeType
      // const audioBlob = new Blob(audioChunks, { type: 'audio/mp4' }); // mimeType
      const audioBlob = new Blob(audioChunks, { type: 'audio/mp4' });

      setResultAudioBlob(audioBlob);

      setAudioChunks([]);
      //
      stream?.getAudioTracks().forEach((track) => {
        track.stop();
      });
      setPermission(false);
      //
    };
  };

  const blobToFile = (theBlob: Blob, fileName: string): File => {
    const b: any = theBlob;

    // A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    // Cast to a File() type
    const resultFile = theBlob as unknown as File;

    return resultFile;
  };

  function sendTextMessageActions(textToSend: string) {
    if (isOnline) {
      // closeReplyMessageFlowHandler
      if (messagesViewModel?.loading) return;
      // setVoiceMessage(true);
      if (textToSend.length > 0 && textToSend.length <= 1000) {
        setMessageText('');
        if (showReplyMessage && messagesToReply?.length > 0) {
          const replyData: ReplyMessagesParams = {
            messagesToReply,
            relatedTextMessage: textToSend,
          };

          repliedActions(replyData);
        } else {
          messagesViewModel.sendTextMessage(textToSend);
          setMessageText('');
        }
        setMessageText('');
      } else {
        setWarningErrorText('Messages must be less then 1000 chars.');
        setTimeout(() => {
          setWarningErrorText('');
        }, 3000);
      }
    }
  }

  const ChangeFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isOnline) {
      const file = event.currentTarget.files?.[0];
      if (!file) return;
      
      const MAXSIZE = maxFileSize || 90 * 1000000;
      if (file.size > MAXSIZE) {
        toast(`File size must be less than ${MAXSIZE / (1024 * 1024)} MB`);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFileToSend(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOnReply = (message: MessageEntity): void => {
    setMessagesToReply([message]);
    setShowReplyMessage(true);
  };

  function getSectionData(messages2View: MessageEntity[]) {
    const groupMessages: { [date: string]: MessageEntity[] } = {};
    const reversedMessages = [...messages2View].reverse();

    reversedMessages.forEach((message) => {
      const date = new Date(message.created_at);

      date.setUTCHours(0, 0, 0, 0);

      const dateString = date.toISOString();

      groupMessages[dateString] = [
        ...(groupMessages[dateString] || []),
        message,
      ];
    });
    Object.keys(groupMessages).forEach((date) => {
      groupMessages[date].sort((a, b) => a.date_sent - b.date_sent);
    });
    const sections: SectionItem<MessageEntity>[] = Object.keys(groupMessages)
      .sort((a, b) => a.localeCompare(b))
      .map((date) => ({
        title: date,
        data: { [date]: groupMessages[date] },
      }));

    return sections;
  }

  const handleHeightChange = (newHeight: number) => {
    console.log('The new height is:', newHeight);
    setClientHeight(newHeight);
  };

  useEffect(() => {
    const codeVersion = '0.3.1';

    console.log(`React UIKit CODE VERSION IS ${codeVersion}`);
    if (isAuthProcessed()) {
      const pagination: Pagination = new Pagination();
      dialogsViewModel?.getDialogs(pagination);
    }

    return () => {
      dialogsViewModel.release();
    };
  }, []);
  // TODO don't need to get all dialogs, just need to get the campaign dialog
  // useEffect(() => {
  //   if (isAuthProcessed()) {
  //     const pagination: Pagination = new Pagination();
  //     dialogsViewModel?.getDialogs(pagination);
  //   }
  // }, [currentContext.InitParams]);
  useEffect(() => {
    // Automatically select the first dialog if available
    if (dialogsViewModel.dialogs.length > 0 && !selectedDialog) {
      // TODO: get dialog by id, not just the first one
      setSelectedDialog(dialogsViewModel.dialogs[0]);
    }
  }, [dialogsViewModel.dialogs]);

  useEffect(() => {
    if (isMobile) {
      if (!selectedDialog) {
        // setShowDialogList(true);
      } else {
        // setShowDialogList(false);
      }
      const canShowMessages =
        selectedDialog && !(showDialogInformation && needDialogInformation);

      if (canShowMessages) {
        setShowDialogMessages(true);
      } else {
        setShowDialogMessages(false);
      }
      if (selectedDialog && showDialogInformation)
        setShowDialogInformation(true);
      else setShowDialogInformation(false);
    } else {
      // setShowDialogList(true);
      setShowDialogMessages(true);
      setShowDialogInformation(true);
    }
    //
    // const sizeChangingLogString = `SIZE INFO: height: ${height.toString()} clientHeight: ${clientHeight}  width: ${width.toString()} breakpont: ${breakpoint.toString()} isMobile:
    //    ${isMobile?.toString()} selectedDialog:
    //   ${selectedDialog ? 'true' : 'false'} showDialogMessages:
    //    ${showDialogMessages?.toString()} showDialogList:
    //    ${showDialogList?.toString()} showDialogInformation:
    //    ${showDialogInformation?.toString()}`;
    //
    // console.log(sizeChangingLogString);
  }, [isMobile]);
  useEffect(() => {
    if (browserOnline) {
      setIsOnline(true);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      toast.dismiss(toastConnectionErrorId.current);
    } else {
      setIsOnline(false);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/ban-ts-comment
      // @ts-ignore
      toastConnectionErrorId.current = toast('Connection ...', {
        autoClose: false,
        isLoading: true,
      });
    }
  }, [browserOnline && connectionStatus]);
  useEffect(() => {
    if (!isOnline) {
      setNeedRefresh(true);
    }
  }, [isOnline]);
  useEffect(() => {
    if (isOnline && needRefresh) {
      if (messagesViewModel.entity) {
        messagesViewModel.getMessages(new Pagination(0, messagePerPage));

        setNeedRefresh(false);
      }
    }
  }, [isOnline]);
  useEffect(() => {
    if (dialogsViewModel.entity) {
      getDialogPhotoFileForPreview().catch();
      userViewModel.entity = dialogsViewModel.entity;
    }

    return () => {
      if (dialogAvatarUrl) {
        URL.revokeObjectURL(dialogAvatarUrl);
      }
    };
  }, [dialogsViewModel.entity]);
  useEffect(() => {
    console.log(
      `Clear selected dialog: ${
        selectedDialog?.name || 'Dialog Name is empty'
      }`,
    );
    if (!dialogsViewModel.entity) {
      setSelectedDialog(undefined);
    }
  }, [dialogsViewModel.entity]);
  useEffect(() => {
    messagesViewModel.entity = dialogsViewModel.entity;
    // setMessagesToView([]);
    setMessageText('');
  }, [dialogsViewModel.entity]);
  useEffect(() => {
    if (userViewModel.entity) {
      userViewModel.getUsers();
    }
  }, [userViewModel.entity]);
  useEffect(() => {
    if (selectedDialog && selectedDialog) {
      dialogsViewModel.entity = selectedDialog;
      userViewModel.entity = selectedDialog;

      if (isMobile) {
        // setShowDialogList(false); don't show dialog list, maybe replace with some other action tho, like refresh
        setShowDialogMessages(true);
      }
    } else {
      // setShowDialogList(true);  don't show dialog list, maybe replace with some other action tho, like refresh
    }
  }, [selectedDialog]);
  useEffect(() => {
    if (messagesViewModel.entity) {
      messagesViewModel.getMessages(new Pagination(0, messagePerPage));
    }
  }, [messagesViewModel.entity]);
  useEffect(() => {
    if (!isMobile && messagesViewModel.entity) {
      dialogsViewModel.setWaitLoadingStatus(messagesViewModel?.loading);
      const timeoutId = setTimeout(() => {
        dialogsViewModel.setWaitLoadingStatus(false); // wait only for 3 sec
      }, 3000);

      return () => clearTimeout(timeoutId);
    }

    return () => {
      // Placeholder: Cleanup handler is not required
    };
  }, [messagesViewModel?.loading]);
  useEffect(() => {
    const MAXSIZE = maxFileSize || 90 * 1000000;
    const MAXSIZE_FOR_MESSAGE = MAXSIZE / (1024 * 1024);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    if (fileToSend?.size && fileToSend?.size < MAXSIZE) {
      if (showReplyMessage && messagesToReply?.length > 0) {
        const replyData: ReplyMessagesParams = {
          messagesToReply,
          relatedFileMessage: fileToSend,
          relatedTextMessage:
            messageText || MessageDTOMapper.REPLY_MESSAGE_PREFIX,
        };

        repliedActions(replyData);
      } else if (isOnline) {
        // eslint-disable-next-line promise/catch-or-return
        messagesViewModel
          .sendAttachmentMessage(fileToSend)
          .then((resultOperation) => {
            // eslint-disable-next-line promise/always-return
            if (!resultOperation) {
              toast(`Incorrect data`);
            }
          })
          .finally(() => {
            setFileToSend(null);
          });
      }
    } else if (fileToSend) {
      toast(
        `file size ${formatFileSize(
          fileToSend?.size,
        )} must be less then ${MAXSIZE_FOR_MESSAGE} mb.`,
      );
      setFileToSend(null);
    }
  }, [fileToSend]);
  useEffect(() => {
    const fileExt = 'mp4';

    if (resultAudioBlob) {
      const voiceMessage = blobToFile(
        resultAudioBlob,
        `${userName || ''}_voice_message.${fileExt}`,
      );

      setFileToSend(voiceMessage);
      if (useAudioWidget) {
        setUseAudioWidget(false);
      }
      //
    }
  }, [resultAudioBlob]);
  useEffect(() => {
    // setFileToSend(null);
    if (isRecording) {
      if (!permission) {
        // eslint-disable-next-line promise/catch-or-return,promise/always-return
        getMicrophonePermission().catch(() => {
          showErrorMessage(`Unable to access microphone.`);
        });
      } else {
        // eslint-disable-next-line promise/catch-or-return,promise/always-return
        startRecording().then(() => {
          // TODO: fix english, not sure if this means it's been recording for 1 minute, or it will be recording for 1 minute
          setWarningErrorText(`Your voice is recording for 1 minute`);
        });
      }
    } else {
      if (permission && mediaRecorder.current) {
        stopRecording();
      }
      setWarningErrorText('');
    }
  }, [isRecording]);
  useEffect(() => {
    if (isRecording && permission) {
      // eslint-disable-next-line promise/always-return,promise/catch-or-return
      startRecording().then(() => {
        // TODO: fix english, not sure if this means it's been recording for 1 minute, or it will be recording for 1 minute
        setWarningErrorText(`Your voice is recording for 1 minute`);
      });
    }
  }, [permission]);
  useEffect(() => {
    setWaitAIWidget(false);
    if (
      defaultAIRephraseWidget?.textToContent &&
      defaultAIRephraseWidget?.textToContent.length > 0
    ) {
      setMessageText(defaultAIRephraseWidget?.textToContent);
    }
  }, [defaultAIRephraseWidget?.textToContent]);
  useEffect(() => {
    setWaitAIWidget(false);
  }, [defaultAITranslateWidget?.textToContent]);
  useEffect(() => {
    setWaitAIWidget(false);
    if (
      defaultAIAssistWidget?.textToContent &&
      defaultAIAssistWidget?.textToContent.length > 0
    ) {
      setMessageText(defaultAIAssistWidget?.textToContent);
    }
  }, [defaultAIAssistWidget?.textToContent]);
  useEffect(() => {
    if (isMobile) {
      if (needDialogInformation) {
        setShowDialogMessages(false);
        setShowDialogInformation(true);
      } else {
        setShowDialogMessages(true);
        setShowDialogInformation(false);
      }
    }
  }, [needDialogInformation]);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <ToastProvider>
      <div className="qb-uikit-layout">
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            zIndex: '100',
            display:
              messagesViewModel && (messagesViewModel.loading || !selectedDialog) ? 'block' : 'none',
          }}
        />
        <DesktopLayout
          mainContainerStyles={{
            minHeight: workHeight,
            maxHeight: workHeight,
          }}
          onHeightChange={handleHeightChange}
          theme={theme}
          dialogsView={
            // showDialogList ? (
            //   <DialogList
            //     disableAction={!isOnline}
            //     scrollableHeight={dialogListScrollableHeight}
            //     // subHeaderContent={<CompanyLogo />}
            //     // upHeaderContent={<CompanyLogo />}
            //     dialogListViewModel={dialogsViewModel} // 1 Get 2 Update UseCase
            //     selectedDialog={dialogsViewModel.entity}
            //     onDialogSelected={selectDialogActions}
            //     onCreateDialog={createDialogHandler}
            //     onLeaveDialog={leaveDialogHandler}
            //     additionalSettings={{
            //       withoutHeader: false,
            //       themeHeader: theme,
            //       themePreview: theme,
            //       useSubHeader: false,
            //       useUpHeader: false,
            //     }}
            //   />
            // ) : null
            null
          }
          dialogMessagesView={
            showDialogMessages &&
            selectedDialog &&
            dialogsViewModel.entity ? (
              <Dialog
                rootStyles={{
                  minHeight: clientContainerHeight,
                  maxHeight: clientContainerHeight,
                }}
                messagesContainerStyles={
                  isMobile
                    ? {
                        minHeight: messagesContainerMobileHeight,
                        maxHeight: messagesContainerMobileHeight,
                      }
                    : {
                        minHeight: messagesContainerHeight,
                        maxHeight: messagesContainerHeight,
                      }
                }
                messagesViewModel={messagesViewModel}
                warningErrorText={warningErrorText}
                // subHeaderContent={<CompanyLogo />}
                // upHeaderContent={<CompanyLogo />}
                renderHeader={
                  <Header
                    title={dialogsViewModel.entity.name}
                    avatar={renderIconForTypeDialog(dialogsViewModel.entity)}
                    // onGoBack={() => setSelectedDialog(undefined)}
                    className="dialog-header__line"
                  >
                    <div className="dialog-header-right">
                      <InformationSvg
                        className="dialog-header-right__icon"
                        onClick={informationOpenHandler}
                      />
                    </div>
                  </Header>
                }
                renderMessageList={
                  messagesViewModel &&
                  messagesViewModel.messages &&
                  messagesViewModel.messages.length > 0 && (
                    <SectionList
                      resetScroll={scrollUpToDown}
                      className="messages-container"
                      onEndReached={fetchMoreData}
                      onEndReachedThreshold={0.95}
                      refreshing={needRefresh || messagesViewModel?.loading}
                      renderSectionHeader={(section) => (
                        <div className="message-view-container--system-message-wrapper">
                          <div
                            style={
                              theme
                                ? { backgroundColor: theme.disabledElements() }
                                : {}
                            }
                            className="message-view-container--system-message-wrapper__date_container"
                          >
                            <MessageSeparator
                              text={section.title}
                              type="date"
                            />
                          </div>
                        </div>
                      )}
                      renderItem={([, groupMessages], listRef) =>
                        groupMessages.map((message) => (
                          <MessageItem
                            disableAction={!isOnline}
                            // defaultGetSenderName={defaultGetSenderName}
                            message={message}
                            currentUserId={currentUserId || -1}
                            enableForwarding={enableForwarding}
                            enableReplying={enableReplying}
                            onReply={(m: MessageEntity) => {
                              handleOnReply(m);
                            }}
                            onForward={() => {}}
                            listRef={listRef}
                            AIAssistWidget={defaultAIAssistWidget}
                            AITranslateWidget={defaultAITranslateWidget}
                            languagesForAITranslate={DefaultConfigurations.getAdditionalLanguagesForAITranslate(
                              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                              currentContext.InitParams.qbConfig.configAIApi
                                .AITranslateWidgetConfig,
                            )}
                            defaultTranslationLanguage={DefaultConfigurations.getDefaultLanguageForAITranslate(
                              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                              currentContext.InitParams.qbConfig.configAIApi
                                .AITranslateWidgetConfig,
                            )}
                            onError={(messageError: string) => {
                              toast(messageError);
                            }}
                            messagesToView={messagesViewModel.messages}
                            maxTokens={maxTokensForAIRephrase}
                          />
                        ))
                      }
                      sections={getSectionData(messagesViewModel.messages)}
                    />
                  )
                }
                renderMessageInput={
                  <MessageInput
                    disableActions={!isOnline}
                    previewMessage={
                      showReplyMessage ? (
                        <ReplyMessagePreview
                          messages={[...messagesToReply]}
                          userNameSentMessage={
                            messagesToReply[0]?.sender?.full_name ||
                            messagesToReply[0]?.sender?.login ||
                            messagesToReply[0]?.sender?.email ||
                            messagesToReply[0]?.sender?.id.toString() ||
                            ''
                          }
                          onClose={closeReplyMessageFlowHandler}
                        />
                      ) : undefined
                    }
                    value={messageText}
                    placeholder="Type message"
                    loading={waitAIWidget || messagesViewModel?.loading}
                    onChange={(text: string) => {
                      setMessageText(text);
                    }}
                    onChanging={() => {
                      messagesViewModel.sendTypingTextMessage();
                    }}
                    onSend={(textToSend: string) => {
                      sendTextMessageActions(textToSend);
                    }}
                    onAttachment={ChangeFileHandler}
                    enableVoice={isRecording}
                    onVoice={() => {
                      if (messagesViewModel?.loading || !isOnline) return;
                      setIsRecording(!isRecording);
                    }}
                    rephrase={
                      <AIRephraseWidget
                        disableActions={!isOnline}
                        waitAIWidget={waitAIWidget}
                        messageText={messageText}
                        theme={theme}
                        AIRephrase={defaultAIRephraseWidget}
                        setWaitAIWidget={setWaitAIWidget}
                        setPrevValueText={(prevValue) => {
                          setMessageText(prevValue);
                        }}
                        setMessageErrorToast={(e: string) => {
                          toast(e);
                        }}
                        messagesToView={messagesViewModel.messages}
                        currentUserId={currentUserId || -1}
                        maxTokensForAIRephrase={maxTokensForAIRephrase}
                        rephraseTones={rephraseTones}
                      />
                    }
                  />
                }
                maxWidthToResize={maxWidthToResizing}
                theme={theme}
              />
            ) : (
              !isMobile && (
                <div
                  className="empty-chat-placeholder"
                  style={{
                    minHeight: clientContainerHeight,
                    maxHeight: clientContainerHeight,
                  }}
                >
                  <Placeholder
                    text={['No chat history.']}
                    className="empty-chat-history-placeholder"
                  />
                </div>
              )
            )
          }
          dialogInfoView={
            showDialogInformation &&
            selectedDialog &&
            needDialogInformation &&
            (isAllMembersShow ? (
              <MembersList
                closeInformationHandler={() => {
                  setIsAllMembersShow(false);
                }}
                members={userViewModel.users}
                maxHeight={dialogListScrollableHeight}
              />
            ) : (
              <DialogInfo
                disableAction={!isOnline}
                onShowAllMemberClick={(value: boolean) => {
                  setIsAllMembersShow(value);
                }}
                users={userViewModel.users}
                rootStyles={{
                  minHeight: clientContainerHeight,
                  maxHeight: clientContainerHeight,
                }}
                // subHeaderContent={
                //   <div>
                //     <p>v0.3.1-beta.5</p>
                //   </div>
                // }
                // upHeaderContent={<CompanyLogo />}
                dialog={selectedDialog}
                dialogViewModel={dialogsViewModel}
                onCloseDialogInformationHandler={informationCloseHandler}
              />
            ))
          }
        />
      </div>
    </ToastProvider>
  );
};

export default QuickBloxUIKitMessageLayout;
