import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://media.istockphoto.com/id/519406045/photo/bangalore-skyline-india.jpg?s=612x612&w=0&k=20&c=oxt58BE9hZWWM1r45X4DrGOdnxSiJOtCIvuXD1uC9Yo=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Bengaluru</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://media.gettyimages.com/id/200273237-001/photo/india-andhra-pradesh-hyderabad-skyline.jpg?s=612x612&w=0&k=20&c=AMPjCftheat8Ll-TAPcBIyvqN66v6A7ztt1nZP9KWKg=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Hyderabad</h1>
                    <h2>345 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://media.istockphoto.com/id/1215791152/photo/moonrise-over-south-central-mumbai-the-financial-capital-of-india-showing-a-glittering.jpg?s=612x612&w=0&k=20&c=vJB6RQMWZ4D9pZ2Kva7QLLBbcAf8SGrRZ-ehCeR76zw=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Mumbai</h1>
                    <h2>567 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured