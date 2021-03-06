import assert from 'assert'
import Id from '../../package/id'
import reduce from '../../package/array/reduce'

describe('A reduce', () =>
  it('shoud reduce arrays to a single value', () =>
    Id([1, 2, 3])
      .map(reduce((acc, x) => acc + x)(0))
      .map(a => a === 6)
      .map(assert)))
