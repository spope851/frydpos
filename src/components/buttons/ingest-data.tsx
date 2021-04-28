import React from 'react'
import { Button } from 'reactstrap'
import { ingestData } from '../../functions/ingest-data'

export const IngestData:React.FC = () => {

  return (
    <Button onClick={ingestData}>
        Ingest
    </Button>
  )
}