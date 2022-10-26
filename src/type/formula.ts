export interface IPopoverContentMenuItem {
  label: string;
  description: string;
  value: string;
  isMore: boolean;
}

export interface IFormulaMenu {
  title: string;
  content: IPopoverContentMenuItem[];
}
