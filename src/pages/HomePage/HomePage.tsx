import React from 'react'
import styled from 'styled-components'
import { H1 } from '../../common/typography/typography'
import { useForm } from '../../common'
import { Button, Input } from '../../components'
import BgHome from '../../assets/images/bg-home.jpg'
import { USER_FORM_INITIAL_VALUES, USER_FORM_VALIDATION_SCHEMA } from '../../constants/forms'

const StyledHome = styled.div`
  background-image: url(${BgHome});
  background-size: cover;
  height: 100vh;
  padding: 0 30px;
  padding-top: 8vh;
  display: flex;
  justify-content: center;
`

const ContentCard = styled.div`
  text-align: center;
  display: inline-block;
`

const StyledForm = styled.form`
  flex-direction: column;
  display: flex;
`

const handleFormSubmit = async (e: any, data: any) => {
  e.preventDefault()
  console.log('nbsj')
}

export const HomePage = () => {
  const formProps = useForm(USER_FORM_INITIAL_VALUES, USER_FORM_VALIDATION_SCHEMA, handleFormSubmit)

  return (
    <StyledHome>
      <ContentCard>
        <H1>
          Memory <br /> Odyssey
        </H1>
        <StyledForm onSubmit={(e) => formProps.handleSubmit(e)}>
          <Input {...formProps} />
          <Button type="submit">Start the Game</Button>
        </StyledForm>
      </ContentCard>
    </StyledHome>
  )
}
