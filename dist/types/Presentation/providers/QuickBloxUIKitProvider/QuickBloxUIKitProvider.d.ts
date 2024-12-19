import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ProviderProps } from '../ProviderProps';
import { LocalDataSource } from '../../../Data/source/local/LocalDataSource';
import { AuthorizationData, LoginData, RemoteDataSource } from '../../../Data/source/remote/RemoteDataSource';
import { BaseUseCase } from '../../../Domain/use_cases/base/BaseUseCase';
import ConnectionRepository from '../../../Data/repository/ConnectionRepository';
import EventMessagesRepository from '../../../Data/repository/EventMessagesRepository';
import { CallBackFunction } from '../../../Domain/use_cases/base/IUseCase';
import { QBUIKitConfig } from '../../../CommonTypes/CommonTypes';
type AccountData = {
    appId: number;
    accountKey: string;
    authSecret?: string;
    authKey: string;
    sessionToken?: string;
};
export type InitParams = {
    maxFileSize: number;
    accountData: AccountData;
    qbConfig: QBUIKitConfig;
    loginData?: LoginData;
};
type QuickBloxProviderProps = ProviderProps & InitParams;
type QBDataStorage = {
    LOCAL_DATA_SOURCE: LocalDataSource;
    REMOTE_DATA_SOURCE: RemoteDataSource;
    SYNC_DIALOGS_USE_CASE: BaseUseCase<boolean, boolean>;
    CONNECTION_REPOSITORY: ConnectionRepository;
    EVENT_MESSAGE_REPOSITORY: EventMessagesRepository;
};
export type QBReactUIKitVersionInfo = {
    version: string;
    build: string;
};
export type QBDataContextType = {
    storage: QBDataStorage;
    InitParams: InitParams;
    updateStorage: (storage: QBDataStorage) => void;
    updateQBInitParams: (InitParams: InitParams) => void;
    release: () => void;
    authorize: (authorizationData: AuthorizationData) => Promise<void>;
    setSubscribeOnSessionExpiredListener: (callback: CallBackFunction<boolean>) => void;
};
export declare const qbDataContext: React.Context<QBDataContextType>;
declare function QuickBloxUIKitProvider({ children, accountData, qbConfig, loginData, maxFileSize, }: QuickBloxProviderProps): import("react/jsx-runtime").JSX.Element;
export default QuickBloxUIKitProvider;
