
interface ErrorInput {
  readonly code: number;
  readonly message?: string;
  readonly detail?: string;
  readonly switchcraftOnlyDetail?: string;
}

export class ApiError extends Error {

  public code: number;

  public detail?: string;

  public switchcraftOnlyDetail?: string;

  constructor (input: ErrorInput) {
    super(input.message);
    this.code = input.code;
    this.detail = input.detail;
    this.switchcraftOnlyDetail = input.switchcraftOnlyDetail;
  }
}
