import { IMapper } from './IMapper';
export declare class MessageRemoteDTOMapper implements IMapper {
    fromEntity<TArg, TResult>(entity: TArg): Promise<TResult>;
    private MessageEntityToRemoteMessageDTO;
    toEntity<TArg, TResult>(data: TArg): Promise<TResult>;
    private remoteMessageDTOToMessageEntity;
    private static validateEntity;
    private static validateDTO;
    private static createDefaultMessageEntity;
}
