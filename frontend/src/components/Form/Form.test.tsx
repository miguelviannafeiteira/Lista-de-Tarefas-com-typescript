/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './index'

describe('Form Component', () => {
  it('should exist hello world', () => {
    const { getByText } = render(<Form />)

    expect(getByText('Hello World')).toBeInTheDocument()
  }
  )
})
