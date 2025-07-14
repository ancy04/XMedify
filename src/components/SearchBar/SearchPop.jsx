import Button from '../Button/Button';
import "./SearchPop.css";

const SearchPop = props => {
    const { locations, clickFunction, hospitals, atBookingsPage } = props;

    const displayStates = () => {
        if (atBookingsPage) {
            if (!hospitals?.length) return null;

            return hospitals.map((item, index) => {
                const { hospitalName, county, city, rating, hospitalType } = item.data;
                const { time, date } = item.dateTime;
                return (
                    <li key={index} className='SearchPopItem SearchPopItem-bookings'>
                        <span>{hospitalName}</span>
                        <span className='resultContent-right resultContent-top'>
                            <Button text={time} buttonClass={`smallButton blueButton-outlined`} />
                            <Button text={date} buttonClass={`smallButton greenButton-outlined`} />
                        </span>
                    </li>
                );
            });
        }

        if (!locations?.length) return null;

        return locations.map((item, index) => (
            <li
                key={index}
                onClick={() => clickFunction(item)}
                className='SearchPopItem'
                role="option"
            >
                {item}
            </li>
        ));
    };

    return (
        <div className='SearchPop'>
            <ul>
                {displayStates()}
            </ul>
        </div>
    );
};

export default SearchPop;
