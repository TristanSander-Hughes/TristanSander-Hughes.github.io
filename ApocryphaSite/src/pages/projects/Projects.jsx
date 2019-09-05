import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Project from '../project/Project';

const Projects = ({ match }) => {
    console.log(match);

    const project = {
        angus: {
            name: 'Angus',
            description: 'Angus helping Donat',
            imageGallery: [
                {
                    src: 'jsdlfjkasdjkf',
                    alt: 'asfpajsdpa',
                }
            ]
        }
    }

    if (match.params.name === undefined) {
        return(
            <div>
                <Link to="/projects/angus">Angus</Link>
            </div>
        );    
    }
    else {
        return(
            <div>
                <Project project={project[match.params.name]} />
            </div>
        );
    }
}

export default withRouter(Projects);