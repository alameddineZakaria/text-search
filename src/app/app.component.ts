import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text-search';
  sampleText = `What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
          of Lorem Ipsum.`;
  searchQuery = '';
  highlightedResults: any[] = [];



  clearSearch(elem: any) {
    this.searchQuery = '';
    this.highlightedResults = [];
    elem.innerHTML = elem.innerText
  }

  highlightText(elem: any) {
    if (this.searchQuery) {
      elem.innerHTML = elem.innerText
        .replace(new RegExp(this.searchQuery + '(?!([^<]+)?<)', 'gi'),
          '<mark class="mark">$&</mark>'
        );
      const query = this.searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
      const regex = new RegExp(`(${query})`, 'gi');
      this.highlightedResults = this.sampleText.split(regex).filter(x => x.toLowerCase() == this.searchQuery.toLowerCase());
      console.log(this.highlightedResults);
    } else {
      this.highlightedResults = [];
      elem.innerHTML = elem.innerText
    }
  }
}
