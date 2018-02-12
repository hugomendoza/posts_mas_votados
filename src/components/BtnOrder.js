import React from 'react'
import { Button, Grid } from 'semantic-ui-react'
import {updateSortUp, updateSortDown} from '../actionCreators.js'
import {connect} from 'react-redux';


const BtnOrder = (props) => {
  return(
    <div>
      <Grid centered columns={2}>
        <Grid.Column>
          <div className="order">
            <h3>Orden:</h3>
            <Button onClick={()=>props.updateSort('asc')} primary>Ascendente</Button>
            <Button onClick={()=>props.updateSort('des')} basic color='blue'>Descendente</Button>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    ascendent: state.ascendent,
    descendent: state.descendent
  };
}

const mapDispatchToProps = dispatch => {
  return{
    updateSort(type){
      if (type === 'asc')
        dispatch(updateSortUp());
      else
        dispatch(updateSortDown());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BtnOrder);
