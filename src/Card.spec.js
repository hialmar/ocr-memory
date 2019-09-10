import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Card from './Card'

// expect.addSnapshotSerializer(enzymeToJSON)

describe('<Card />', () => {
  it('should trigger its `onClick` prop when clicked', () => {
    const onClick = sinon.spy()
    const wrapper = shallow(<Card card="😀" feedback="hidden" index={0} onClick={onClick}/>)

    wrapper.simulate('click')
    expect(onClick).to.have.been.calledWith(0)
  })

  it('should match its reference snapshot', () => {
    const onClick = sinon.spy()
    const wrapper = shallow(
      <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
    )
    let snapshotFilename = __filename + ".snap";
    let snapshotName = "should match its reference snapshot";
    expect(wrapper).to.matchSnapshot(snapshotFilename, snapshotName);
    //expect(wrapper).to.matchSnapshot()
  })
})
