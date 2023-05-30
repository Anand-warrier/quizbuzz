import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Approval = () => {
  return (
    <div style={{paddingTop:'70px'}}>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Tag</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Approval
