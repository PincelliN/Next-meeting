import { Meeting } from "../types/meeting";

type MeetingProps = {
  meetings: Meeting[];
};

const Meetings: React.FC<MeetingProps> = ({ meetings }) => {
  return (
    <>
      <div className="container">
        <div className="row g-5 m-auto">
          <div className="col">
            {meetings.map((el) => {
              return (
                <>
                  <div className="card bg-secondary m-2" key={el.id}>
                    <div className="card-body d-flex justify-content-between align-items-center ">
                      <div className="d-flex justify-content-start align-items-center ">
                        <img src={el.img} className="avatar" alt={el.name} />
                        <section className="ms-2">
                          <h5 className="h3 text-white">{el.name}</h5>
                          <p className="text-white">
                            <strong>{el.ideal}</strong>
                          </p>
                        </section>
                      </div>
                      <div>
                        <button className="btn btn-danger">cancella</button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Meetings;
