export interface Command<I, O> {
  run(params: I): O;
}