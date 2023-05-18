import { CallBackFunction } from '../IUseCase';
import { ISubscribable } from './ISubscribable';
import EventMessageType from '../../../entity/EventMessageType';

export interface Registry {
  unregister: () => void;
}

export interface Callable<TArg> {
  [key: string]: CallBackFunction<TArg>;
}

export interface EventSubscriber<TArg> {
  [key: string]: Callable<TArg>;
}

// SubscriptionPerformer<TArg>
/*
release
subscribe
informSubscribers
 */
type DictionaryType<T> = Dictionary<CallBackFunction<T>>;
export class SubscriptionPerformer<TArg> implements ISubscribable<TArg> {
  protected readonly onEventByTypeSubscribers: Dictionary<
    DictionaryType<TArg>
  > = {};

  public static readonly DEFAULT_SUBSCRIPTION_NAME = 'DEFAULT';

  protected readonly subscribers: DictionaryType<TArg> = {};

  protected EVENT_NAME: string =
    SubscriptionPerformer.DEFAULT_SUBSCRIPTION_NAME;

  protected EVENT_TYPE: string = EventMessageType.LocalMessage;

  public release(): void {
    Object.entries(this.onEventByTypeSubscribers).map((x) => {
      const eventName = x[0];

      this.onEventByTypeSubscribers[eventName][this.EVENT_NAME] = () => {
        console.log('ERROR release event in SubscriptionPerformer');
      };

      return this.onEventByTypeSubscribers[eventName][this.EVENT_NAME];
    });
    // Object.entries(this.onEventByTypeSubscribers).map((x) => {
    //   const eventName = x[0];
    //
    //   return this.onEventByTypeSubscribers[eventName].slice();
    // });
  }

  constructor() {
    console.log('CONSTRUCTOR SubscriptionPerformer');
    // this.onEventByTypeSubscribers[EventMessageType.LocalMessage] = [];
    this.onEventByTypeSubscribers[EventMessageType.LocalMessage] =
      this.subscribers;
  }

  subscribe(
    callBack: CallBackFunction<TArg>,
    typeEvent: string = this.EVENT_TYPE,
    nameEvent: string = this.EVENT_NAME,
  ): void {
    console.log(
      `have subscribe SubscriptionPerformer from event ${typeEvent}: `,
      callBack,
    );
    if (this.onEventByTypeSubscribers[typeEvent] === undefined) {
      this.onEventByTypeSubscribers[typeEvent] = {};
    }
    this.onEventByTypeSubscribers[typeEvent][nameEvent] = callBack;

    // if (!this.onEventByTypeSubscribers[typeEvent]) {
    //   this.onEventByTypeSubscribers[typeEvent] = [];
    // }
    // const alreadyHave = this.onEventByTypeSubscribers[typeEvent].includes(callBack);
    //
    // if (!alreadyHave) {
    //   this.onEventByTypeSubscribers[typeEvent].push(callBack);
    // } else {
    //   console.log('ALREADY HAVE CALLBACK');
    // }
  }

  public informSubscribers(
    arg: TArg,
    eventType: string = this.EVENT_TYPE,
    event: string = SubscriptionPerformer.DEFAULT_SUBSCRIPTION_NAME,
  ): void {
    const haveSubscriptionsForType = this.onEventByTypeSubscribers[eventType];
    const haveSubscriptionName =
      event !== SubscriptionPerformer.DEFAULT_SUBSCRIPTION_NAME;
    const haveSubscribers =
      this.onEventByTypeSubscribers[eventType][event] !== undefined;
    const haveValidType =
      typeof this.onEventByTypeSubscribers[eventType][event] === 'function';

    if (haveSubscriptionsForType) {
      if (haveSubscriptionName && haveSubscribers && haveValidType) {
        if (arg) {
          this.onEventByTypeSubscribers[eventType][event](arg);
        }
      } else {
        Object.entries(this.onEventByTypeSubscribers[eventType]).forEach(
          (value) => {
            if (arg) {
              const currentEventName = value[0];

              console.log('call for event: ', currentEventName);
              value[1](arg);
            }
          },
        );
      }
    }

    // if (this.onEventByTypeSubscribers[eventType]) {
    //   if (
    //     event !== SubscriptionPerformer.DEFAULT_SUBSCRIPTION_NAME &&
    //     this.onEventByTypeSubscribers[eventType][event] &&
    //     typeof this.onEventByTypeSubscribers[eventType][event] === 'function'
    //   ) {
    //     if (arg) {
    //       this.onEventByTypeSubscribers[eventType][event](arg);
    //     }
    //   } else {
    //     Object.entries(this.onEventByTypeSubscribers[eventType]).forEach(
    //       (value) => {
    //         if (arg) {
    //           const currentEventName = value[0];
    //
    //           console.log('call for event: ', currentEventName);
    //           value[1](arg);
    //         }
    //       },
    //     );
    //   }
    // }
  }
}