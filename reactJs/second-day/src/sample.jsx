{Array.from({ length: 12 }, (_, i) => {
          const number = i + 1;
            console.log("number:",number)
          return (
            <div
              className="number"
              key={number}
              style={{
                transform: `rotate(${number * 30}deg)`,
              }}
            >
              <span
                style={{
                  transform: `rotate(-${number * 30}deg)`,
                }}
              >
                {number}
              </span>
            </div>
          );
        })}


        Array.from({length:12},(a,b)=>{
                console.log("a:",a,"b:",b)
        })