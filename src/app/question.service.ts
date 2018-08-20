import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase, OptionGenerator }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions(i) {

    let allForms: QuestionBase<any>[][] = [];
    for (let i=0; i<450; i++) {
      let questions: QuestionBase<any>[] = [];
      for (let i=0, length = Math.floor(Math.random()*20); i<length; i++) {
        const options = new OptionGenerator();
        options.controlType === 'textbox' ? questions.push(new TextboxQuestion(options)) : questions.push(new DropdownQuestion(options))
      }
      allForms.push(questions.sort((a, b) => a.order - b.order));
    }

    return allForms[i];
    //   = [
    //
    //   new DropdownQuestion({
    //     key: 'brave',
    //     label: 'Bravery Rating',
    //     options: [
    //       {key: 'solid',  value: 'Solid'},
    //       {key: 'great',  value: 'Great'},
    //       {key: 'good',   value: 'Good'},
    //       {key: 'unproven', value: 'Unproven'}
    //     ],
    //     order: 3
    //   }),
    //
    //   new TextboxQuestion({
    //     key: 'firstName',
    //     label: 'First name',
    //     value: 'Bombasto',
    //     required: true,
    //     order: 1
    //   }),
    //
    //   new TextboxQuestion({
    //     key: 'emailAddress',
    //     label: 'Email',
    //     type: 'email',
    //     order: 2
    //   })
    // ];
  }
}
