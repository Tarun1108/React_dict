
import React from 'react'
import ReactDOM from 'react-dom'
import Tree from '@naisutech/react-tree'



const Treemap= ()=> {
  const nodes = [
    {
      label: 'Tasks',
      id: 1234,
      parentId: null,
      items: [
        {
          label: 'Task1',
          parentId: 1234,
          id: 5678
        }
      ]
    },
    {
      label: 'Marketing',
      id: 1236,
      parentId: 1234,
      items:  [
        {
          label: 'Awesome Website',
          parentId: 1236,
          id: 5670,
         
        }
      ]
    },
    {
      label: 'Contact Form',
      id: 5678,
      parentId: 1234,
      items: [
        {
          label: 'Really Long File Name With Auto Layout',
          parentId: 5678,
          id: 7840
        },
        {
            label: 'Really Long File Name With Auto Layout',
            parentId: 5678,
            id: 7845
          },
          {
            label:'Really Long File Name With Auto Layout',
            parentId: 5678,
            id: 7850
          }
      ]
    },
    {
        label: 'Budget Appoval for ...',
        id: 1235,
        parentId: null,
        items: null
      },
    {
      label: 'Onboarding',
      id: 1235,
      parentId: null,
      items: null
    }
  ]
  return (
      
    <div style={{ display: 'flex', flexWrap: 'nowrap', flexGrow: 1 }}>
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
        <Tree nodes={nodes} showEmptyItems size="half" theme={'light'} />
      </div>
      {/* <div style={{ width: '50%', display: 'flex', flexGrow: 1 }}>
        <Tree nodes={nodes} grow />
      </div> */}
    </div>
  )
}

// const rootElement = document.getElementById('root')
// ReactDOM.render(<Tree />, rootElement)

export default Treemap;