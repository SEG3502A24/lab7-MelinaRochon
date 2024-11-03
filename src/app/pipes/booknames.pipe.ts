import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../books/model/book';

@Pipe({
    name: 'booknames',
    standalone: true
})
export class BooknamesPipe implements PipeTransform {

  transform(value: Book[] | undefined): string {
    if (value == null) return '';
    return value.map((book) => `- ${book.title}`).join(' <br/> ');
  }

}
