import { GetrecentFlickers } from "@/api/recent-flickers";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import PlayModal from "../play-modal/playModal";
import RecentFlickersTable from "../recent-flickers-table/recentFlickerTable";

const HomeContent:FC = () => {
  const[showModal, setShowModal] = useState(false);
  const searchParams = useSearchParams();
  const search = searchParams.get('ref')

  const {data, isLoading, isRefetching} = useQuery({
    queryKey: ['recent'],
    queryFn:  () => GetrecentFlickers(search)
  });


  useEffect(() => {
    console.log("component mounted", search);
  }, [])

  if(isLoading) {
    console.log("Loading");
  }
  if (data) {
    console.log(data);
  }

  if(isRefetching) {
    console.log('isRefetching');
    
  }

  const handleModal = () => {
    setShowModal(!showModal)
  }
  return(
    <div>
      <div className="home-content">
        <section>
          <h1 className="heading-primary">
            <img src="/static/img/landing.png" alt="landing"/>
          </h1>
        </section>
        <section className="center-area">
          <span>
            #1 place to <br /> bean flick and <br /> coin flip
          </span>
          <div className="start_button" onClick={handleModal}></div>
          <RecentFlickersTable tableData={data} />
        </section>
      </div>
      <PlayModal show={showModal} handleModal={handleModal} />
    </div>
  )
}

export default HomeContent;