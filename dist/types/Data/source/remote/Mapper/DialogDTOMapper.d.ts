import { IDTOMapper } from './IDTOMapper';
export declare class DialogDTOMapper implements IDTOMapper {
    private readonly currentUserId;
    constructor(currentUserId: number);
    fromDTO<TArg, TResult>(dto: TArg): Promise<TResult>;
    toTDO<TArg, TResult>(qbEntity: TArg): Promise<TResult>;
    private static validateDTO;
    private static validateQBChatDialog;
    private static formatLastMessageText;
}
