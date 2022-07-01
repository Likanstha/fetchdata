import React from 'react'
import { Table } from 'react-bootstrap'
import { PropTypes } from "prop-types";

export const UniTable = ({lists}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Domains</th>
                    <th>Webpages</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {lists.length ?
                    lists.map((row, index) => (
                        <tr key={index}>
                            <td>{row.domains}</td>
                            <td>{row.web_pages}</td>
                            <td>{row.name}</td>
                        </tr>
                    )) : (
                        <td className="text-center">
                            No list to show</td>
                    )
                }
            </tbody>
        </Table>
    )
}

UniTable.protoTypes = {
    lists: PropTypes.array.isRequired,
};