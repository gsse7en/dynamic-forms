export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}

export class OptionGenerator {
  value: any;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];

  constructor() {
    let randomBoolean = !Math.round(Math.random());
    let randomString = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    let randomNumber = (size) => Math.floor(Math.random()*size);
    let controlTypes = ['textbox', 'dropdown'];
    let textboxTypes = ['text', 'email', 'password'];
    let options = [];
    for (let i=0; i<randomNumber(10); i++) {options.push({key: randomString(), value: randomString()})}
    this.value = randomString();
    this.key = randomString();
    this.label = randomString();
    this.required = randomBoolean;
    this.order = randomNumber(20);
    this.controlType = controlTypes[randomNumber(2)];
    this.type = this.controlType === controlTypes[0] ? textboxTypes[randomNumber(3)] : '';
    this.options = this.controlType === controlTypes[1] ? options : null;
  }
}
