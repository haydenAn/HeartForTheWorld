import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideUpDownAnimation = [
    trigger('slideUpDown', [
        state('CLOSE', style({
            'max-height': '0px', 'visibility': 'hidden'
        })),
        state('OPEN', style({
            'max-height': '*', 'visibility': 'visible'
        })),
        // transition('OPEN => CLOSE', [group([
        //     animate('300ms ease-in-out', style({
        //         'max-height': '0px'
        //     })),
        //     animate('700ms ease-in-out', style({
        //         'visibility': 'hidden'
        //     }))
        // ]
        // )]),
        // transition('CLOSE => OPEN', [group([
        //     animate('1ms ease-in-out', style({
        //         'visibility': 'visible'
        //     })),
        //     animate('600ms ease-in-out', style({
        //         'max-height': '*'
        //     }))
        // ]
        // )]),
    
        transition(':enter', [
            style({
              transform: 'translateY(-10%)',
              opacity: 0
            }),
            animate('1s ease-in-out', style({
              transform: 'translateY(0)',
              opacity: 1
            }))
          ]),
          transition(':leave', [
            animate('1s ease-in-out', style({
              transform: 'translateY(-10%)',
              opacity: 0
            }))
          ])
    ])
]