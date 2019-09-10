import Adapter from 'enzyme-adapter-react-16'
//import enzymeToJSON from 'enzyme-to-json/serializer'
import chai from 'chai'
import { configure as configureEnzyme } from 'enzyme'
import chaiJestSnapshot from 'chai-jest-snapshot'
import createChaiEnzyme from 'chai-enzyme'
import createChaiJestDiff from 'chai-jest-diff'
import dirtyChai from 'dirty-chai'
import sinonChai from 'sinon-chai'

// import expect from 'jest'

chai
  .use(dirtyChai)
  .use(createChaiJestDiff())
  .use(chaiJestSnapshot)
  .use(createChaiEnzyme())
  .use(sinonChai)

// expect.addSnapshotSerializer(enzymeToJSON)

configureEnzyme({ adapter: new Adapter() })
