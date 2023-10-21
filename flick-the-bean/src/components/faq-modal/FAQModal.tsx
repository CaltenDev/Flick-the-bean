import { GetProfile } from "@/api/profile";
import GetCookie from '@/hooks/cookies/getCookie';
import { GetrecentFlickers } from "@/api/recent-flickers";
import { useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { FC, useState, useEffect } from "react";
import Modal from "../modal/modal";
import RecentFlickersTable from "../recent-flickers-table/recentFlickerTable";
import BadgeModal from "../badge-modal/badge-modal";
import { create } from "domain";
import { profile } from "console";

interface FaqModalProps {
	show: boolean;
  handleModal: () => void;
}

const FaqModal:FC<FaqModalProps> = ({ show, handleModal }) => {
  return(
		<Modal customClass={'faq-modal'} show={show} handleModal={handleModal}>
			<div className="profile">
				
			</div>
		</Modal>
  )
}

export default FaqModal;