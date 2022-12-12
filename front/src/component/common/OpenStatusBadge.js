export default function OpenStatusBadge(props) {

    const {runningTime, fontSize} = props;

    const isOpen = () => {
        let now = new Date();

        let open = runningTime?.openAt?.split(":");
        let close = runningTime?.closeAt?.split(":");

        let openTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), open[0], open[1]);
        let closeTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), close[0], close[1]);

        if (openTime.getTime() < now.getTime() && now.getTime() < closeTime.getTime()) {
            return true;
        }
        return false;
    }
    let openStatus = "";

    const handle = () =>{
        let status = isOpen();
        openStatus = status ? "OPEN" : "CLOSE";
        if (status) {
            return '#28a745';
        }
        return '#cc0000';
    }

    return (
        <span
            className="px-4 py-1 mb-2 mx-1"
            style={{
                color: "white",
                borderRadius: "27px",
                backgroundColor: handle(),
                fontSize: "12px",
            }}
        >
            {openStatus}
        </span>
    )
}
