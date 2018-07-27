import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
chai.should();

describe('sample test', () => {
    it('works', () => {
        expect(1 + 1).to.equal(2)
    })
});
