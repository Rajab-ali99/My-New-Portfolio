import React from 'react'
import { Spinner } from './ui/spinner'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const ButtonLoader = ({text,className,type,loading,onClick, ...props}) => {
  return (
     <Button  
    type={type} 
    disabled={loading}
    className={cn('',className)} 
    {...props}
    onClick={onClick}>
  {text}
  {loading &&(
  <Spinner />
  )}
</Button>
  )
}

export default ButtonLoader