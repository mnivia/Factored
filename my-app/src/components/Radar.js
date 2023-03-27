import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

export default class Radar extends React.Component {
  render() {
 	 const data = [
      {
        data: {
          battery: 0.7,
          design: .8,
          useful: 0.9,
          speed: 0.67,
          weight: 0.8
        },
        meta: { color: 'blue' }
      },
      {
        data: {
          battery: 0.6,
          design: .85,
          useful: 0.5,
          speed: 0.6,
          weight: 0.7
        },
        meta: { color: 'red' }
      }
    ];

	const captions = {
      // columns
      battery: 'Python',
      design: 'SQL',
      useful: 'React',
      speed: 'API',
      weight: 'Devops'
    };

    return (
      <div>
        <RadarChart
            captions={{
              // columns
              battery: 'Python ',
              design: 'SQL',
              useful: 'React',
              speed: 'API',
              weight: 'Devops'
            }}
            data={[
              // data
              {
                data: {
                  battery: Math.random(),
                  design: Math.random(),
                  useful: Math.random(),
                  speed: Math.random(),
                  weight: Math.random()
                },
                meta: { color: 'red' }
              },
            ]}
            size={150}
          />
        </div>
    );
  }
}