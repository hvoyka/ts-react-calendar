export interface IAction<TType, TPayload> {
  type: TType;
  payload: TPayload;
}
