import { describe, it, expect } from 'vitest'
import { compareDates } from './compareDates'

describe('compareDates', () => {
  it('Should compare two dates correctly', () => {
    // Arrange
    const dateA = { date: '2022-03-15' }
    const dateB = { date: '2022-03-10' }

    // Act
    const result = compareDates(dateA, dateB)

    // Assert
    expect(result).toBeGreaterThan(0)
  })
})
