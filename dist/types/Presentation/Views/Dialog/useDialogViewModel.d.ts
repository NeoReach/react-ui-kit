import { DialogType } from '../../../Domain/entity/DialogTypes';
import { DialogEntity } from '../../../Domain/entity/DialogEntity';
import { DialogViewModel } from './DialogViewModel';
export default function useDialogViewModel(dialogType: DialogType, dialogEntity: DialogEntity): DialogViewModel;
