import React from "react";
import style from "../Filter/Filter.module.css"
// import PropTypes from "prop-types"

const Filter = ({value, onChange}) => (
<div className={style.blockFilter}>
<label>
    <span className={style.label}>Find contacts by name</span> <br/>
     <input className={style.inputFilter} type="text" name="filter" value={value} onChange={onChange} />
    </label>
</div>
)



export default Filter