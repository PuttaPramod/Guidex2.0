import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  colleges,
  College
} from '../../data/colleges-data';

import {
  UserState,
  UserCollege
} from '../../services/user-state';

interface CollegeDetailData extends College {
  admission: string[];
  facilities: string[];
  programs: string[];
}

@Component({
  selector: 'app-college-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './college-detail.html',
  styleUrl: './college-detail.css'
})
export class CollegeDetail implements OnInit {

  collegeId = signal('');

  college = signal<CollegeDetailData | null>(null);

  constructor(
    private route: ActivatedRoute,
    private readonly userState: UserState
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = params.get('id') ?? '';

      this.collegeId.set(id);

      const selected = colleges.find(
        college => college.id === id
      );

      if (!selected) {
        this.college.set(null);
        return;
      }

      const detail = this.createDetail(selected);

      this.college.set(detail);

      /*
       * =====================================================
       * ADD TO RECENTLY VIEWED COLLEGES
       * =====================================================
       */

      const recentCollege: UserCollege = {

        id: selected.id,

        name: selected.name,

        shortName: selected.shortName,

        city: selected.city,

        state: selected.state,

        type: selected.type,

        icon: selected.icon

      };

      this.userState.addRecentCollege(recentCollege);

    });

  }


  private createDetail(college: College): CollegeDetailData {

    return {
      ...college,

      admission: this.getAdmission(college),

      facilities: this.getFacilities(college),

      programs: this.getPrograms(college)
    };

  }


  private getAdmission(college: College): string[] {

    switch (college.type) {

      case 'IIT':
        return [
          'JEE Advanced',
          'GATE',
          'JAM',
          'Institute-specific admission processes'
        ];

      case 'NIT':
        return [
          'JEE Main',
          'GATE',
          'JAM',
          'Other applicable national-level examinations'
        ];

      case 'IIIT':
        return [
          'JEE Main',
          'GATE',
          'Institute-specific admission routes'
        ];

      case 'Medical':
        return [
          'NEET-UG',
          'NEET-PG',
          'Applicable medical admission processes'
        ];

      case 'Law':
        return [
          'CLAT',
          'University-specific admission process'
        ];

      case 'Management':
        return [
          'CAT',
          'GMAT where applicable',
          'Institute-specific selection process'
        ];

      case 'Research':
        return [
          'GATE',
          'JAM',
          'Institute-specific selection process',
          'Research entrance/interview processes'
        ];

      case 'Deemed University':
        return [
          'University-specific entrance examination',
          'Merit-based admission where applicable',
          'National-level examinations where applicable'
        ];

      case 'Private':
        return [
          'State-level entrance examinations',
          'University entrance examination',
          'Merit-based admission where applicable'
        ];

      default:
        return [
          'University admission process',
          'Merit-based admission',
          'Applicable entrance examinations'
        ];
    }

  }


  private getFacilities(college: College): string[] {

    switch (college.type) {

      case 'Medical':
        return [
          'Teaching hospital',
          'Medical laboratories',
          'Central library',
          'Hostels',
          'Clinical training facilities',
          'Research facilities'
        ];

      case 'Research':
        return [
          'Research laboratories',
          'Advanced computing',
          'Central library',
          'Research centres',
          'Hostels',
          'Academic facilities'
        ];

      case 'Law':
        return [
          'Law library',
          'Moot court facilities',
          'Classrooms',
          'Hostels',
          'Research facilities'
        ];

      case 'Management':
        return [
          'Business library',
          'Case-study facilities',
          'Computer facilities',
          'Hostels',
          'Seminar halls'
        ];

      default:
        return [
          'Central library',
          'Computer facilities',
          'Laboratories',
          'Hostels',
          'Sports facilities',
          'Research facilities'
        ];
    }

  }


  private getPrograms(college: College): string[] {

    if (college.courses.length > 0) {
      return college.courses;
    }

    return [
      'Undergraduate Programs',
      'Postgraduate Programs',
      'Research Programs'
    ];

  }

}