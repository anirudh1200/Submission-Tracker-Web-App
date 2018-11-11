import React from 'react';

const SubmissionDetails = props => {

    const id = props.match.params.id;

    return(
        <div className="container section project-details">
            <div className="card z-depth-1">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Legam familiaritatem arbitror irure probant. Quem ita et quis litteris, sint
                        appellat ubi veniam magna, o export velit ut laborum, aliqua ita do malis
                        nescius, in se export litteris ad anim transferrem mandaremus anim incurreret de
                        quo ex summis sunt cillum, multos appellat eu consectetur. Noster ingeniis
                        deserunt, et duis aliquip graviterque. Quid se constias e tempor ubi cillum
                        consectetur singulis tempor nostrud, incididunt legam admodum, enim
                        reprehenderit excepteur tamen ullamco an fabulas eram quibusdam ex fore
                        quibusdam proident, quem quibusdam est iudicem id an ex arbitrantur.Se quis quis
                        quem proident quo possumus ita quis arbitror, hic nulla aut legam, elit de
                        laboris, non ipsum et cillum eu excepteur ab cupidatat, sed enim adipisicing ne
                        quo ne culpa iudicem. Id ea nisi iudicem, admodum anim culpa proident fugiat,
                        admodum quem laboris pariatur, veniam iis aliquip a esse, proident fugiat
                        proident a quorum litteris mentitum se sint efflorescere senserit quae iudicem
                        do ea aliqua dolor ne nostrud. Aliquip fore cernantur.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd of November, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default SubmissionDetails
