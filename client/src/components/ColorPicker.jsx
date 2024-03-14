import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={['Violet','Indigo', 'Blue','Green','Yellow', 'Orange',
         'Red', 'White', 'Grey', '#DD407B', '#197F5A', 'cyan' ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker
