import React, { useEffect, useRef, useState } from "react";
import { FightsApi } from "../../Api/fights.js";
import HistoryItem from "../../components/historyItem";
import "./history.scss";
import Select from "react-select";
const History = () => {
  const bottomRef = useRef(null);
  const [firstLoad, setFirstLoad] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [fights, setFights] = useState([]);
  const [user, setUser] = useState(undefined);
  const [selectedSortOrder, setSelectedSortOrder] = useState("desc");

  const [page, setPage] = useState(1);
  const limit = 10;
  const [hasMore, setHasMore] = useState(true);
  const orderOptions = [
    { value: "desc", label: "Descending" },
    { value: "asc", label: "Ascending" },
  ];
  const getFights = async () => {
    if (loading || (!hasMore && !firstLoad)) return;

    setLoading(true);
    setError(null);
    try {
      const response = await FightsApi.getFights({
        page: page,
        limit: limit,
        sortOrder: selectedSortOrder,
      });

      const newFights = response?.data?.fights || [];
      setFights((prevFights) => [...prevFights, ...newFights]);

      setUser(response?.data?.user);

      if (newFights.length < limit) {
        console.log("No more data");
        setHasMore(false);
      }
      setFirstLoad(false);
    } catch (err) {
      console.error(err.message);
      setError("Failed to fetch fight");
    } finally {
      setLoading(false);
    }
  };
  const handleSortOrderChange = (selectedOption) => {
    setSelectedSortOrder(selectedOption?.value || "desc");
  };
  const resetAndRefetch = () => {
    setFights([]);
    setPage(1);
    setHasMore(true);
    setFirstLoad(true);

    getFights().then(() => {});
  };

  useEffect(() => {
    if (!bottomRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 },
    );

    observer.observe(bottomRef.current);

    return () => {
      if (bottomRef.current) observer.unobserve(bottomRef.current);
    };
  }, [bottomRef.current, hasMore, loading]);

  useEffect(() => {
    resetAndRefetch();
  }, [selectedSortOrder]);
  useEffect(() => {
    getFights();
  }, [page]);
  return (
    <div className={"history"}>
      <div className={"history__header"}>
        <div className={"history__header__text"}>
          <div className={"history__header__text__title"}>User History</div>
          <div className={"history__header__text__subtitle"}>
            Page with useer fights list: {user?.address}
          </div>
        </div>
        <div className={"history__header__actions"}>
          <Select
            className={"history__header__actions__order react-select-container"}
            classNamePrefix="react-select"
            options={orderOptions}
            onChange={handleSortOrderChange}
            placeholder="Order..."
            defaultValue={orderOptions[0]}
          />
        </div>
      </div>
      <div className={"history__content"}>
        {}
        {fights.length > 0 ? (
          fights.map((fight, key) => <HistoryItem key={key} item={fight} />)
        ) : (
          <div>No Data</div>
        )}
        {error && <div className="error">{error}</div>}
      </div>
      {loading && (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      )}
      {!firstLoad && <div ref={bottomRef} className="loading-trigger"></div>}
    </div>
  );
};
export default History;
