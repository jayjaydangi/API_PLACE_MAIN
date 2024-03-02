import { useRouter } from 'next/router'
import APIDetailPage from '../../Components/ApiDetail/ApiDetailComponent'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getFeatureReportsAction } from '../../Components/store/actions/homeAction';
import { connect } from 'react-redux';
// import { data } from 'autoprefixer';
// import CommonHeader from '../../Components/Commons/CommonHeader'

function Api_Detail_page(props) {
    const { homefeatureData, getFeatureReportsAction } = props;
    const router = useRouter()
    console.log('router', router.query.api_id)
    let api_Id = router?.query?.api_id;
    const [apiDetailData, setapiDetailData] = useState([])

    async function fetchProjects() {
        try {
            if (api_Id) {
                const response = await axios.get(`https://gatewaysvc-dev.azurewebsites.net/api/projects/${api_Id}`);
                console.log('response', response)
                if (response.status === 200) {
                    return response.data;
                } else {
                    throw new Error(`API request failed with status ${response.status}`);
                }

            } else {
                console.log('api_Id is undefined', api_Id)

            }
        } catch (error) {
            console.error('Error fetching projects:', error);
            throw error;
        }
    }


    useEffect(() => {
        fetchProjects()
            .then(data => {
                setapiDetailData(data)
                console.log('Fetched projects:', data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
        getFeatureReportsAction();
    }, [api_Id, getFeatureReportsAction]);
    console.log('apiDetailData', apiDetailData)



    return (
        <>
            <APIDetailPage apiDetailData={apiDetailData} api_Id={api_Id} homefeatureData={homefeatureData} />
        </>
    )
}


const mapStateToProps = (state) => (console.log("state------", state), {
    homefeatureData: state.homeFeatureReducer.homefeatureData,

});

export default connect(mapStateToProps, {
    getFeatureReportsAction
})(Api_Detail_page);