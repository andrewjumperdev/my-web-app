import React from 'react'
import { projects } from '../db'
import CardItem from './CardItem';

const recentsProItems = projects.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

const listRecents = recentsProItems.slice(0,4);

const RecentsProjects = () => {
  return (
    <div className="container-fluid">
        <div className="row justify-content-center">
            <CardItem col="col-sm-12" items={listRecents} />
        </div>
    </div>
  )
}

export default RecentsProjects