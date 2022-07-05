import styled from "styled-components";

export const Warpper = styled.div`
.first-home-feed {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0.5rem 0.0.75rem 0;
    .feed-item:nth-child(2n) {
        margin-left: 0.45rem;
    }
    .feed-item {
        width: 8.4rem;
        margin-bottom: 0.875rem;
        list-style: none;
        position: relative;
        .feed-item-img {
            width: 100%;
            height: 4.7rem;
            border-radius: 0.2rem;
            -o-object-fit: cover;
            object-fit: cover;
            margin-bottom: 0.425rem;
            vertical-align: bottom;
            background-color: #f6f6f6;
        }
        .feed-item-info {
            position: absolute;
            top: 3.2rem;
            background-image: linear-gradient(-180deg,transparent,rgba(0,0,0,.9));
            border-radius: 0 0 0.2rem 0.2rem;
            width: 100%;
            height: 1.5rem;
            padding-top: 0.2rem;
            box-sizing: border-box;
            z-index: 1;
            display: flex;
            align-items: center;
            .comment-icon {
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaVJREFUSA3dlbtLxEAQhxP1FERQsPDVpLFRtBJsROS0ERs7sRAPe/+lKxQRLYXr5BRBRRCUEysbK8XCysYn8ZtzNsRk98jlKh34mM3Mzm93Ni/P++vmJxsIw1BiUzAN/ZCaQyxuIRfPcAGXvu/Ltd0QD6AKeU1qg7h6tDsSkyROoQeeoAp34N4RSUw0RqEIA/ACM3RSw/8Y4gW4ArE96DW5rF5qtBZX1ypEtQRKEsVuoStKNDmQWtXAhSUpb1ONBfVlWnvTcdNOa8taOC/eLDCowRv1HjuoyDYyWsXU4Y3GkMTMAh064V19sy7+IBiNuqYRTgnS7lIqmCNgOshRmq3E2QFnX0Ri1iJzQnfyjmQy5wJUb8OwReWB2IglbkKdOvgU32iBNfLWDlTA5SY08RhN4DiO9XGci4I5Bmg4X7Qccr9LEJfPyxaMwTXsgPuIKOgjvwwBNDLbx26dB+FDipL3oBvhFeKrsAjmhjHMZEfM2kD83sxOLnBAol2TX/hDOIP4m6rpyEnO+cMxC7zqdBE/h13YZyfyX2jdOJZx2ISgdbX/pvANfigaftmdBhoAAAAASUVORK5CYII=);
            }
            .play-icon {
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhtJREFUSA3FlU0rRFEYx2cQmR0leSlZKC8LK9laTrIhkoWFHSvF57CwkBUbG3wHZcuCKJRRKAkbdqjR9ftf95k597p33Cbyr9+cc57nOc95vWcymT9WNk1+z/P6iRuEdijCNRSy2ewFZXUiaQMsQwGSdIpjAXJJo8SugA7DdNiBrqDjI+U+3EEddMMQtIF0DuOs6NJvVfoh+SS8gXQEeaiJ9sFWBxNwAtILjEXjQm0ChsGSr1KvDQXENIhphC2Q1LcvJiyTwaE9vwFp1Q2i3QpNri1ax78O0iFoG8PCqAOVtC2lmVNfhA8owgY0h3t+tbDn4AqkpW8xGO225F0n9mf1QLZ1T9Rn3RirYx9VIDozm19i6PfNnvdAGTrQwK6iB/actuo9biLataAc0kDJR2PGN3nedskYVAK7Z3bas6BVSFrVnPlU0t6VA02pbbPVFyrpnlcUd32LgF7YhHpYI1kjpclydMpgA5jzN0pbrZ/brtN9kNkftdIozFYHvAIt8A7zrOqV0tQRVCynv2+/dcg1TMAOWQ9kWTiSrql1SHNN8+SRCuXMQQ3jTx/aBzEbkPSh6Yoeg7QcN8BPT0Xrt06OgaR6uyQ9Nw2Oq1zFUc1jp5lbcm2jnvpkEZD2udaBas9tW5R8Mpq5mj8c5dB1HgHbtlvq01zXA8p0YjZp/jJ183Q54vecoWJXEJ0CCdw/fbn1EZ0wY/1V/q8+AcH8xe/j63XUAAAAAElFTkSuQmCC);
            }
            .item-img {
                width: 0.6rem;
                height: 0.6rem;
                margin-left: 0.3rem;
                margin-bottom: 0.3rem;
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: 100%;
            }
            .item-img-time {
                
            }
            .item-text {
                margin-left: 0.25rem;
                font-size: .55rem;
                color: #fff;
                margin-bottom: 0.3rem;
            }
        }
        .feed-item-title {
            font-size: .7rem;
            color: #333;
            line-height: .95rem;
        }
        .line-cut1, .line-cut2 {
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }
        .line-cut2 {
            -webkit-line-clamp: 2;
        }
    }
}
`