import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { personalData } from '../personal';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {

  name: string
  data: any

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name').trim()
    this.data = personalData[this.name]
  }

}
