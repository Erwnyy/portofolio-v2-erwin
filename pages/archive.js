import dynamic from 'next/dynamic'
import React from 'react'

const Archive = dynamic(() => import('components/organisms/archive'));
const Templates = dynamic(() => import('components/templates'));

export default function Index() {
  return (
    <div>
      <Templates title={'Landing Page'} theme="LIGHT">
        <Archive />
      </Templates>
    </div>
  )
}
