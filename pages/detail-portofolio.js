import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
import React from 'react'

const DetailPortofolio = dynamic(() => import('@/components/organisms/detail-portofolio'));
const Templates = dynamic(() => import('@/components/templates'));

export default function Index() {
    return (
        <div>
            <Templates title={'Landing Page'} theme="LIGHT">
                <DetailPortofolio />
            </Templates>
        </div>
    )
}
