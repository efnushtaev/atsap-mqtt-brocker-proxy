export class Model {
	private _greetings: string;

	constructor(_greetingsSubject?: string) {
		if (_greetingsSubject) {
			this._greetings = `Hello, ${_greetingsSubject}!`;
		} else this._greetings = 'Hello world!';
	}

	public get greetings(): string {
		return this._greetings;
	}

	// public static createModel(greetingsSubject?: string): Hello {
	// 	return new Hello(greetingsSubject);
	// }
}
