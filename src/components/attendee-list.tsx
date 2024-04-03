import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from 'lucide-react'
import { Table } from './table/table'
import { IconButton } from './icon-button'
import { TableHeader } from './table/table-header'
import { TableLine } from './table/table-line'
import { ChangeEvent, useState } from 'react'
import { attendees } from '../data/attendees'

export function AttendeeList() {
    const [searchText, setSearchText] = useState<string>('')
    const [page, setPage] = useState(1)

    let pageNumbers = Math.ceil(attendees.length / 10);

    function onSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value)
    }

    function goToNextPage() {
        setPage(page + 1)
    }

    function goToPreviousPage() {
        setPage(page - 1)
    }

    function goToFirstpage() {
        setPage(1)
    }

    function goToLastpage() {
        setPage(pageNumbers)
    }

    return (
        <div className=' flex flex-col gap-4'>
            <div className="flex flex-row gap-3 items-center">
                <h1 className="text-2xl font-bold ">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3">
                    <Search size={16} className='text-emerald-300' />
                    <input onChange={onSearchInputChange} className="bg-transparent flex-1 outline-none h-auto border-0 text-sm p-0" placeholder="Buscar participante..."></input>
                </div>
            </div>

            <Table>
                <thead>
                    <tr className='border-b border-white/10'>
                        <TableHeader style={{ width: 48 }}>
                            <input type='checkbox' className='size-4 bg-black/20 rounded bornder border-white/10' />
                        </TableHeader>
                        <TableHeader> Código </TableHeader>
                        <TableHeader> Participante </TableHeader>
                        <TableHeader> Data de inscrição </TableHeader>
                        <TableHeader> Data de check-in </TableHeader>
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </tr>

                </thead>
                <tbody>
                    {attendees.slice((page - 1) * 10, page * 10).map((attendees) => {
                        return (
                            <TableLine key={attendees.code} code={attendees.code} name={attendees.name} email={attendees.email} createdAt={attendees.createdAt} checkedAt={attendees.checkedAt} />
                        )
                    })}

                </tbody>
                <tfoot>
                    <tr>
                        <td className='py-3 px-3 text-sm  text-left' colSpan={3}> Mostrando 10 de {attendees.length} </td>
                        <td className='py-3 px-3 text-sm  text-right' colSpan={3}>
                            <div className='inline-flex itens-center gap-8'>
                                <span>Mostrando {page} de {pageNumbers}</span>
                                <div className=' flex gap-1.5'>
                                    <IconButton disabled={page === 1} onClick={goToFirstpage}>
                                        <ChevronsLeft size={16} />
                                    </IconButton>
                                    <IconButton disabled={page === 1} onClick={goToPreviousPage}>
                                        <ChevronLeft size={16} />
                                    </IconButton>
                                    <IconButton disabled={page === pageNumbers} onClick={goToNextPage}>
                                        <ChevronRight size={16} />
                                    </IconButton>
                                    <IconButton disabled={page === pageNumbers} onClick={goToLastpage}>
                                        <ChevronsRight size={16} />
                                    </IconButton>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}