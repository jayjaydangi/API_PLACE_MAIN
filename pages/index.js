import React, { useEffect, useState } from 'react'
import ProductHomePage from '../Components/HomeComponent/HomeComponent'
import axios from 'axios';

const IndexHome = () => {
  const [Projects, setProjects] = useState([]);

  async function fetchProjects() {
    try {
      const response = await axios.get('https://gatewaysvc-dev.azurewebsites.net/api/projects');
      console.log('response', response)
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`API request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  }


  useEffect(() => {
    fetchProjects()
      .then(projects => {
        setProjects(projects)
        console.log('Fetched projects:', projects);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);
  console.log('projects', Projects)
  return (
    <>
      <ProductHomePage Projects={Projects} />
    </>
  );
};

export default IndexHome;
