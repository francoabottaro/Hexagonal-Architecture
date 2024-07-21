export class UserEmail {
  value: string;
  constructor(value: string) {
    this.value = value;
    this.ensureIsValid();
  }
  private ensureIsValid() {
    if (!(this.value.includes("@") && this.value.includes("."))) {
      throw new Error(`Email must be a valid mail address`);
    }
  }
}
