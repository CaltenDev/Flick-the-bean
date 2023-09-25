import { GetrecentFlickers } from "@/api/recent-flickers";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import PlayModal from "../play-modal/playModal";
import RecentFlickersTable from "../recent-flickers-table/recentFlickerTable";

const HomeContent:FC = () => {
  const[showModal, setShowModal] = useState(false);
  const {data, isLoading, isRefetching} = useQuery({
    queryKey: ['recent'],
    queryFn:  GetrecentFlickers
  });


  useEffect(() => {
    console.log("component mounted");
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
      <section>
        <h1 className="heading-primary">
          #1 PLACE TO <br /><span className="heading-primary__thick">BEAN</span> FLICK AND
          <span className="heading-primary__thick"> COIN</span> FLIP
        </h1>
      </section>
      <section className="top-area">
        <button className="primary-btn" onClick={handleModal}>Play</button>
        <div className="arrow-down">
          <img className="arrow-down__figure" src="/static/img/arrow.svg" alt="arrow down icon" />
        </div>
      </section>
      <section className="center-area">
        <div className="line"></div>
        <h2 className="main__heading">MOST RECENT BEAN FLICKERS</h2>
        <RecentFlickersTable tableData={data} />
        <h2 className="secondary-heading">Flip Responsibly!</h2>
      </section>
      <PlayModal show={showModal} handleModal={handleModal} />
    </div>
  )
}

export default HomeContent;