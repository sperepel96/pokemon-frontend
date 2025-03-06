import Pokemon from "../../components/pokemon/card";
import "./home.scss";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { PokemonApi } from "../../Api/pokemon.js";
import { PokemonTypesApi } from "../../Api/pokemonTypes.js";
import CustomSelect from "../../components/customSelect";

export const Home = () => {
  const navigate = useNavigate();
  const [firstLoad, setFirstLoad] = useState(true);

  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [limit] = useState(20);

  const [searchText, setSearchText] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const [selectedSortField, setSelectedSortField] = useState(null);
  const [selectedSortOrder, setSelectedSortOrder] = useState("asc");
  const [hasMore, setHasMore] = useState(true);

  const sortOptions = [
    { value: "name", label: "Name" },
    { value: "base.attack", label: "Attack" },
    { value: "base.defense", label: "Defense" },
    { value: "base.speed", label: "Speed" },
    { value: "base.hp", label: "HP" },
  ];
  const orderOptions = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];
  const bottomRef = useRef(null);
  const resetAndFetchPokemons = async () => {
    console.log("reset");
    console.log(page);
    setPage(1);
    setPokemons([]);
    setFirstLoad(true);
    setHasMore(true);
    await getAll();
  };
  const getAll = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError(null);
    try {
      const response = await PokemonApi.getAlllazy({
        page: page,
        limit: limit,
        type: selectedTypes,
        sortBy: selectedSortField,
        order: selectedSortOrder,
        search: searchText,
      });
      const newPokemons = response?.pokemons || [];
      setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
      console.log(response);
      if (newPokemons.length < limit) {
        console.log("No more data");
        setHasMore(false);
      }
      setFirstLoad(false);
    } catch (err) {
      console.error(err.message);
      setError("Failed to fetch pokemons");
    } finally {
      setLoading(false);
    }
  };
  const getPokemonTypes = async () => {
    try {
      const response = await PokemonTypesApi.getAll();
      setPokemonTypes(
        response.data.map((type) => ({
          value: type.name,
          label: type.name,
          data: type,
        })),
      );
    } catch (err) {
      console.error(err.message);
      setError("Failed to fetch pokemons");
    }
  };
  const handleTypesChange = (selectedOptions) => {
    setSelectedTypes(selectedOptions || []);
  };

  const handleSortFieldChange = (selectedOption) => {
    setSelectedSortField(selectedOption?.value || null);
  };

  const handleSortOrderChange = (selectedOption) => {
    setSelectedSortOrder(selectedOption?.value || "asc");
  };

  useEffect(() => {
    if (!bottomRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 },
    );

    observer.observe(bottomRef.current);

    return () => {
      if (bottomRef.current) observer.unobserve(bottomRef.current);
    };
  }, [bottomRef.current, loading]);

  useEffect(() => {
    getPokemonTypes();
  }, []);

  useEffect(() => {
    resetAndFetchPokemons();
  }, [selectedTypes, selectedSortOrder, selectedSortField, searchText]);
  useEffect(() => {
    if (page > 1) {
      getAll();
    }
  }, [page]);

  return (
    <div className={"home"}>
      <div className={"home__navbar"}>
        <div className={"home__navbar__header"}>
          <div className={"home__navbar__header__title"}>
            <div className={"home__navbar__header__title__text"}>Pokemons</div>
            <div className={"home__navbar__header__title__subtitle"}>
              Select pokemon to start fight
            </div>
          </div>
          <div className={"home__navbar__header__actions"}>
            <button
              className={"waves-effect waves-light btn"}
              disabled={!selectedPokemon?.id}
              onClick={() => {
                navigate(`/room/${selectedPokemon?.id}`);
              }}
            >
              {selectedPokemon?.id
                ? `Start fight ${selectedPokemon?.name}`
                : "Select pokemon"}
            </button>
          </div>
        </div>
        <div className={"home__navbar__body"}>
          <div className={"home__navbar__body__search"}>
            <input
              className={"home__navbar__search__input"}
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearchText(inputValue);
                }
              }}
              placeholder="Search  Pokemon...(Press Enter)"
            />
          </div>
          <div className={"home__navbar__body__filter"}>
            <CustomSelect
              key={pokemonTypes}
              pokemonTypes={pokemonTypes}
              handleChange={handleTypesChange}
              selectedTypes={selectedTypes}
            />
          </div>
          <div className={"home__navbar__body__sort"}>
            <Select
              className={
                "home__navbar__body__sort__sort-by react-select-container"
              }
              classNamePrefix="react-select"
              options={sortOptions}
              onChange={handleSortFieldChange}
              placeholder="Sort by..."
              isClearable
            />
            <Select
              className={
                " home__navbar__body__sort__order react-select-container"
              }
              classNamePrefix="react-select"
              options={orderOptions}
              onChange={handleSortOrderChange}
              placeholder="Order..."
              defaultValue={orderOptions[0]} // За замовчуванням Ascending
            />
          </div>
        </div>
      </div>
      {error && <div className="error">Error: {error}</div>}
      {loading && <div className="loading">Loading...</div>}

      <div className={"home__pokemons"} key={pokemons.length}>
        {pokemons.map((pokemon, key) => {
          return (
            <Pokemon
              key={key}
              pokemon={pokemon}
              setSelectedPokemon={setSelectedPokemon}
            />
          );
        })}
      </div>
      <>
        {!firstLoad && <div ref={bottomRef} className="loading-trigger"></div>}
        {loading && (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        )}
      </>
    </div>
  );
};

export default Home;
