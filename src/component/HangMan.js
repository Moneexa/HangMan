import './HangMan.css';
import step01 from './images/0.jpg'
import step02 from './images/1.jpg'
import step03 from './images/2.jpg'
import step04 from './images/3.jpg'
import step05 from './images/4.jpg'
import step06 from './images/5.jpg'
import step07 from './images/6.jpg'
import { PROGRAMING_LANG } from './randomWords'
import React, { Component } from 'react'
class HangMan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen_words: "",
            img: "",
            count: 0,
            _buttons: [],
            randomWord: PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)],
            dashes: [], Decision: ""

        }

    }
    componentDidMount() {
        var _dash = this.state.randomWord.split("").map((letter) => {
            "-"
        })
        this.setState({
            dashes: _dash.fill("-")
        }, () => {
            console.log(this.state.dashes)
        })
    }
    handleit = (_count) => {
        this.setState({
            count: _count
        }, () => {
            if (this.state.count === 1) {
                this.setState({
                    img: step01
                })
            }
            else if (this.state.count === 2) {
                this.setState({
                    img: step02
                })
            }
            else if (this.state.count === 3) {
                this.setState({
                    img: step03
                })
            }
            else if (this.state.count === 4) {
                this.setState({
                    img: step04
                })
            }
            else if (this.state.count === 5) {
                this.setState({
                    img: step05
                })
            }
            else if (this.state.count === 6) {
                this.setState({
                    img: step06
                })
            }
            else if (this.state.count === 7) {
                this.setState({
                    img: step07
                })
            }
        })

    }
    handleGuess = (e) => {
        var _count = this.state.count + 1
        if (this.state.randomWord.includes(e.target.value) === false) {
            var _dec = "YOU LOST"

            this.handleit(_count);
            e.target.disabled = true;
            e.target.style.color = "#d6dfdf";
            e.target.style.backgroundColor = "#f10";
            e.target.style.borderColor = "#f10";
            e.target.style.boxShadow = "0 0 40px #f10";
            console.log(this.state.img);
            if (this.state.img === "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAFeCAYAAADAEFB0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABNtSURBVHgB7d1/bNz1fcfx9/kHCyUMsxVEWCcuFQzS/kGc/bEU7OQMoVvoJBKqpdImLU5YtU0UJVH/AjTFTEKsmqokoEpbN2Jnk6aJbjgZVbpCxl2cCwZ1xEYZlAmoTdQthCLi8iMJts/X9/v4Xjhf7j7+nu973+/3zs+HdLq7731tvjHf170/P74/RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgXEJClM1m837X7enpCXXbgEraBEBVBARwICCAQ2z7IAgWfbrFoYIADgQEcCAggAMBARwICOBAQAAHAgI4EBDAgYAADgQEcOiQmAr60Ih0Op3s6OhIJxKJZKXP8/n85OzsbHdfX9+UxFA2m03rU8pe67b29fb2ZgQNtyQqiM9w9MU1HIhObCtIUDQcXZ2dncP6Mlnpcw3HlBeOSQHKtHwF0XDs0afVjlU2Ew5U09IBOX78+G596nessou2PFxaNiAWDm0+DVT7XD97RAcC9grg0JIBGRkZ2bRAOPZp5RgQYAEtFxAbsdLRqkHHKuMajp0C+NBSo1glw7ldlT73hnM3C+BTy1QQG871OdcxKYBPLRMQDcdgtXAYqxyEA7VqiYDYiJWGY5NjlV0ajnEBatT0AWE4F43U1AEZHR3dynAuGqlpA6Kd8tXar3BVhkwrDedq2JPF19rfmhSEoimHeb3h3GGGc9FoTVdBOHQdYWq6CsKh6whTU1WQbDbrPHRdA7KNcCBITRMQ79D1qp1uG85dt27dQQEC1BQB0XDsWGiug+FcNELsA2LDuRqAqsO5+tlBwoFGiXVAisO51T73Rqy2CdAgsQ0Iw7mIg9gO8zKciziIcxOLK5Egcs14LBZXIkFomiogHLqOsDVNQDh0HVFoloBwJRJEIvYHKy71Q9dTqVRXp0xvOvwfw10zuVxh2VtvvrHzq6neTJvMjP9n5sVJQcMEeouBhWSz2Xwt6y/lK5FsSPWkEgnZvWzZstTNq74s1123QpZdfnnhs6mzZ+Wd0/8vZ86cttcZXc/mgsaffT77iCBQsQ7IzMxM91K72MIfpNYmc4mOwRuSX0yl7tggv/WF35ZTp07J+fPnZXp6urBOe1ub/OLd0/LyT16S37n5Ftn89S3yd997XAPzznh7fnYzVSU4cQ7IrqU2YnVX6rbVkmgf/v2NX0uuva2nsOy9996TkydPygcffCDnz30s77/3rnzyyQVZu/Yr0nfnXXLLqi/ZJY1EK43s/8e/l+F/f2pyJt/ZnclkOMIgALENSNB3mIqzYtXQP85q/Ud3dV19dcX1rGllrli+XJZfcaU2QXPzV9C21rtnztgrKklAWv4GOs0gl+hM/+X930rednuvBOHZH/9o9T8fGLTrE/cJ6kJAIqbNqv5rrr0mueGrGyUom+79Izk2cjS1IS+pI5lsRrBo3OU2YvlE244t3/hjmZubC/SR6rtT/+fmmTuqExUkYtrnmPreE3vFHg343agTAYnQp82ra1Pf/PP75eZbVl3y+av/c1IODf+bvD05Ib/3lR6xkS0brSrKPH9EXhl/WedIrpebdTRrdffvXvxscuJncmD/968S1IWARCgvidTX/vAe6V7z2Y798ccfy09eGpVM+r/k/37+c7lVd/pNX//GvGAU2TyJhWZy4i25cOHCvM+uW7GisIqgLgQkQolE4obkyi8WXlswDv/wkPzwmUNyTl+v1Yqx49t/suDv+DQ4iQrLLxcbLk7pEHKG4d5Fo5MesVdfPSlD+/9Bvr3jfjn19inpXXdHYfn42H/7/h0//tEzcujpHxQOP0GwqCARyufzh37wr/+SWt+3Qf7sL751sRl14cL5ik2qauznbRLxuhXXC4JFBYnQkczxwtBVaef72nOvyb23rZTioSZ+WOd8y9rr5TcuvDVvuYWG5lV9CEj0MsWmkYXjpqlnZdX7z8hvlu3sLpV+zkaxFHfVqhNNrIjl83L0f3/6Wso66+9+7kvySfuvF5b/8te+4Pt3VPq5V8ZetqejgrpQQSI2Kx17rUNeHKa1HbyWcBSV/tzU1FmZnPyZtOdnOX+/TgQkYnZY+rnzF/YdTT9XdR0Lz7hWBJsYtMfrP33N+TtfGs3K1PvvD3E0b/0ISAzkpGPgxRdemPT6DfPYsn3f/RsZP/HyxWUvvpDVZd+pOKxr4dHPJ9slx9mFAeB8kJiwk6WWfe6K9NZt3+wqHa615tKF8+cvGcK15TYZWDocbIH5p8HvT50/d67vucwLdNADQEBipBiS9X13dtlMei1e1GbVSPoI4QgYAYmZT88u7EwnV65M2gRg8VCUaqwJdjR9xJ45i7ABGOaNGW8HX3lXPtc/OTGxu6urK3nLqi/LVV1dhWaWddhtpv3M6dPy+uuv2mTgeCLftve5TPaAIHBUkJj77t9+Z2c+n9/zzjuFS/wU+hx2+Z/Pf/6aqZmZ2X1/tXtgQNAwVJCYsvujdHZ22nnlqSqr2D3id2fv3LB+ZmaGm5c2CMO8NTp27Fjq+PHjw7YDS4OMjo5u7ejoGBN/53OkNEhjWp05vbYBCEgNvFAMapNnk939ysIiAbO7+eZyuaFEItFVw4/Zunu8OwEHuS2F7dHwPS9LFAGpwsKgAZgorRQaij3FW8LZsz7SQVaShe7muxD72SAqif6b7NGtv2/M257UyMjIJlmCCEgVxfsjavNlwr5F7aHv5+0kdr+SoNr+C93NtwZ7NCSrpQ7t7e0JfeyQz+7ylWhra9uv21hLVWsJBKQCLwzJ4nv7Fq3wzT4e1P1KFrqbb610W4fr2Zm1iZfXxy59WXr50qsvu+yy/fbCqzBJq3jS4ghIBbpzrHR9bled15GjwG7JoN/WA9Xu5rsYXuVbdH9Eq6Jt09m5ubntpcut72X9Lv1ssw0i2PBzqze9CEgF69at69edY5sFQRrMmkPafNkqwdtZzyCC/g0sJAc1bAdLFtvc1LBu79PeIEKx6ZWUFkVAqtAdZEj/5w9V+qy0byJ1suaQNIhuZ13bNz09ndeHVZGpkt9Z3nTr0r9Fy1YRAlKFfStqFXGOCFm/pHykqxbaPOkPsmlVQaqeKmJNLW1KTem/M1Ppc11+Vh93tPJtKghIFd4o1sVvS90RpjQwlxzvVE81qfcbvpH/Da8jbvdheLp89M6T1+V3tPotuQlIBdov2FP+za7vd7r6JrVWE/tmb3D1KKq5iuj69gXRp48TVcJhrD/yp9LiCEgZa/bo07ymld2CWpsRhephfRO7b2IA1SS0IdJaqojNnmvfy0bVni8PsFXRstV3NuJogjghIGV0p7in9L13I9GB0mU2OeinmlTbeazKOL6ZGyHlZ17Etku3Pa2PSwJlgwn6d7CTUzIli62KtPQEIgEpo23qzTZDXnzv3WW34v3+vGpih2TsK/+seCiKNdfKd6AoRn20ueQccLD5jEoHSFpHXJ926d/lXn0+q/M/80a1VJf+XF0z93FGQCqwGXLdMez2ZQseRm7h0fXtnI2+KvMmO23HK60mul7oM9Aa1vWVllt4LcTarBquMIQ7pl8Aa4qjVDaqpetN6ETqXxd/3D5v5Y46J0wFyHY2DYO136sFYK9+Ax/SCpKWaHTr3/Xi+ereOSc2D3NJBbDjwnTnf6RS9dRqY0+btIIelBZHQBrAqxaDIY1S+WZNx+LxY3YclfahBsqrhje3sX0p7Px+0MRqAGtyVOubRMmaWVblNMDDViEqNKlsu9cQjs9QQRrMO1I3HZdqYv2kSttSWl3wGSpIg1knX3e8laUjY1GqMLcxaQMMhKMyAhISb2QsVk0u3Z6D1hRs9cNF6sFVTUJUbag1bDYjrttiTaqWPcgwKAQkJN5kYSwm1DQcfaXDvaiOJlZI4jTbrBVkyZ1bvlgEJCT6rR2bgMRpW+KOgIREv7Vj0f8wGpBbBb4QkJDUeCE43/bv3y/79u2Tjz76yPfPaFipID4RkPAEvlOePn1annrqKXnzzTflwQcfrOVHkwJfCEgIvBEsZwWxnf2BBx6QsbEx8cvW37hxY+FnH3roIalB1+joaFKwIAISAj8jWNZUWr58uTz66KO+mky2fnd3d6F63H333bJixQqpRS6XYyTLBwISAj/Dqrazv/HGG4VnC0d/f3/VamIV4/Dhw4XXH374oWzfvl1qNTc3Rz/EBwISgra2tuRC61gVeOKJJwqvLRj2vlhNLBBFFghrWtnndnGFxx57TBZDt4kK4gMBCYFWkKSf9ayZ9PDDDxcqglUIqyY6+lUIRLFiDA4OFq56aO9tvVqbVrVu01JHQEJQ68x1aTWxs/csCNbnsKB4Z/MVwrNlyxZZLK0gVwkWREBCoDvjDVKj0mpi4VizZk2hj3LfffddrB71oIL4Q0BirlhNTpw4URjSffLJJwvLLTSlfZNFoA/iAwEJQb3f1tYZN9YfsREuC82VV145r2+yiG0iID4QkJizKmHVwkJh/Q+rJjaSZa937NhR+MxGu+qsJqiCgISgnuOw7BCS3t7eQqWwcNx0000X+yY2BGyfLaaaNOrYsFZDQMKxqJ3RqoPt/KZ8trzYN7EmV3Gk6/HHHy8cm9XIbVpqCEhMFWfLb7zxxsLEYaVRq/KRLmMVBcHhlNuYKs6WW0WwyUEXW8/mRSxIi504RGUEJIaKByLWMltu6xCO4NHEiikb2rUdvp7ZctSPChJDVjVsUhDRIyDhsCuk1zRqFEJzaUqwIJpYIahw67LIxXGb4oiAAA4EJAQ6ax27b2vdpknBgghIOGjONCkCEoK5ubm3JWaoIP4QkBDEsYmlof2lYEEEJARx/LamgvhDQEKg39Zx7KRPCBZEQEKQy+Vidy8Omlj+EJBwxK6CzM7OcgMdHwhICOxGnhKvkEzpNjH07AMBCc+kxAfVwycCEhJt878iMZHP5+l/+ERAQtLW1habb20dwcoIfCEgIdFv7dgEJE7bEncEJCRxGjViBMs/AhISb9QoDjvmOCNY/hGQEGnT5qhELA7b0EwISIji0PbXwYK0wDcCEqJcLndQIjY9PU0FqQEBCZHX9s9IdDL0P2pDQEIWcR/gkKAmBCRkOsQaZTMrI6gJAQmZNnGso56RkGnlmuzp6WH+o0YEJAJRNLMSicQ+Qc0ISAS0mbVXQjYzMxP5CFozIiARCHs0SyvWIe+cFNSIgEREd9pHJDyhV6xWQUAi0tvbm5EQqoh1zr3/FhaBgEQojCqinfMBwaIRkAg1uop4Q7sHBItGQCLWyCqi1WOzoC4EJGJWRTQkjZijGGJisH4EJAZ0XmRAArwskDWtdN4jzFGylkVA4qFLarxFm4sGbjPzHsEgIDHQ3t6ekuDs8o73QgAISAy0tbVtlQBYh1/7HUwKBoiARCydTif1KVWyaCqXy+2SGvok3g05t2mHf0AQKAISMW1eDZQtOrh+/fq92snuFn9zJBntc3Rr5RgSBI77pEdM5yrWl77XalCY2PM62X3Hjh1L6bJ+bYbdqu9Xe+tM6vvM3NzcAQ4jaSwCEiHb+TUgyeL7SsdNhXXMFiqjiRUhqwxlizgsJGYISES0c95VPnqlfYkhQawQkIho53xT2aIMk3vxQ0AiUmHuY0gQOwQkAhXmPuycca5ZFUMEJAIdHR07yxYNccXDeCIg0bin9E1x7gPxQ0BC5mfuA/FBQEJWYe6DvkeMEZAQeXMf85pXUVxEDv4RkBB5cx+lJ0Yx9xFzBCREzH00HwISkipzH9ztKeYISEg6OzvLDy0ZonkVfxzuvgjZbHaPPnXZlUP87uQ6erVDh3dL3zP30QSoIDXymko2E96vVWFCw5IeGRnZ5PoZ5j6aFxWkRhVOkU1p5zulIZi06+Bav6K8qtjcR2n10NcZQVOgggTEqxBDHR0dY1pVBr1KU1A+98FF3ZpHQkKkO07e77o9PT2hblst9N+xem5ubqePy/Vk9GHXqCo9OHFc/23dgqZABVkEu+btunXr+rUSrLTr6lqfosqqKZkfDsPMeRMhIHWwvoZ2tnfqY6VWlG3yabVwYu6juRCQgGhFsaupd2s16bPL8VRah3sFNh8CEjAbvi02v6SsomifZVDQVBjmbRCvUnSXdOhvuP322zm0vckQkAbzbmLTL2hKNLEABwICOBAQwIGAAA4EBHAgIIADAQEcCAjgQEAABwICOBAQwIGAAA4EBHAgIIADAQEcCAjgQEAABwICOBAQwIGAAA4EBHAgIIADAQEcCAjgQEAABwICOBAQwIGAAA4EBHAgIIADAQEcCAjgQEAABwICOBAQwIGAAA4EBHAgIIADAQEcCAjgQEAABwICOBAQwIGAAA4EBHAgIIADAQEcCAjgQEAABwICOBAQwIGAAA4EBHAgIIADAQEcCAjgQEAABwICOBAQwIGAAA4EBHAgIIADAQEcCAjgQEAABwICOBAQwIGAAA4EBHAgIIADAQEcCAjgQEAABwICOBAQwIGAAA4EBHAgIIADAQEcCAjgQEAABwICOBAQwIGAAA4EBHAgIIADAQEcCAjgQEAABwICOBAQwIGAAA4EBHAgIIADAQEcCAjgQEAABwICOBAQwIGAAA4EBHAgIIADAQEcCAjgQEAABwICOBAQwIGAAAAW51f+VJNKURnleQAAAABJRU5ErkJggg==") {
                this.setState({
                    Decision: _dec,
                    dashes:this.state.randomWord.split("")

                })
            }
        }
        else {
            var _newArr = this.state.dashes;
            var _decision = "YOU WON"
            for (let i = 0; i < this.state.randomWord.length; i++) {

                if (this.state.randomWord[i] === e.target.value) {
                    console.log("comes here");
                    _newArr[i] = e.target.value
                }
            }
            this.setState({
                dashes: _newArr
            }, function () {
                console.log(this.state.dashes);
                console.log(this.state.randomWord.split(""))
                if (this.state.dashes.toString() === this.state.randomWord.split("").toString()) {
                    this.setState({
                        Decision: _decision
                    })

                }
            }
            )
        }
    }

    render() {
        return (
            <div className="Hangman">


                <div className="d-flex align-items-center justify-content-center">
                    <img src={this.state.img} />
                </div>
                <div className="d-flex align-items-center justify-content-center" id="hangman_sec_2">
                    {
                        this.state.dashes.map((letter, index) => (
                            <p id={index} key={index} style={{
                                letterSpacing: "1em",
                                margin: ".4em -1em .2em 0",
                                fontSize: "1.5rem",
                                color: "#07ffc9"
                            }}>{letter}</p>
                        ))
                    }
                </div>

                <div className="d-flex align-items-center justify-content-center text-center">
                    <p className="text-warning mt-4">{this.state.Decision}</p>
                </div>
                <div className="flex-wrap-wrap">
                    {
                        "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (

                            <button
                                key={letter}
                                value={letter}
                                style={{
                                    background: "#" + Math.floor(Math.random() * 16777215).toString(16),
                                    borderRadius: "10px",
                                    margin: "18px 8px 10px 13px",
                                    fontSize: "2.5rem", width: "5rem"
                                }}
                                onClick={(e) => this.handleGuess(e)}
                            >
                                {letter}
                            </button>
                        ))}
                </div>
            </div>


        )


    }

}
export default HangMan;